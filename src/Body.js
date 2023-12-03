import React from 'react';
import axios from 'axios';
import {useState, useEffect } from 'react';
import './Css/Body.css';
import Component from './Component';
import Preloader from './Preloader';
const PORT = process.env.PORT || 3001;

function Body(props) {
  const selected = {props}.props.selected;
  let count_record = {props}.props.count_record;
  const [data, setData] = useState([]); 
  const [cross_id, setId] = useState([]);
  let [lenght, setLength] = useState();
  const [loading, setLoading] = useState(true);
  const content = loading ? <Preloader/> : <div id='empty'></div>

useEffect(() => {
  //console.log(cross_id.length);
  const arr_id = [];
  const proms = [];
  const posts = async() => {
    if (selected.length === 0) {
      const lenght = await axios.get('http://localhost:4500/get_length_bd');
      for (let i = 0; i < lenght.data.count_record; i++) {
        proms.push(axios.get(`http://localhost:4500/get_bd/${i}/`)); 
      }  
      const results = await Promise.all(proms);
      const peoples = results.map(item => item.data);
      setData(peoples);
      setLoading(false);

      for (let i = 0; i < peoples.length; i++) {
        arr_id.push(peoples[i].id);
      }
      setId(arr_id);
    } 
      else {
        const records = await axios.post('http://localhost:4500/get_length_bd_part', {selected});
        for (let i = 0; i < records.data.length; i++) {
          proms.push(records.data[i]); 
        }
        setData(proms);
        setLoading(false);  

        for (let i = 0; i < proms.length; i++) {
          arr_id.push(proms[i].id);
        }
        setId(arr_id);
      }
  }
  posts();
  
}, [selected.length, lenght, count_record]);
  
  return (
    <div className='ProductList'>
      {content}
      {data.map((elem) => (
       <Component key={elem.id} elem={elem} id={elem.id} setLength={setLength}/>
      ))}
    </div>
  )
}

export default Body

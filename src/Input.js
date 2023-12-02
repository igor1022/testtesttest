import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Input = (props) => {
    const elem = {props};
    const [value, setValue] = useState('');
    
    let previous_value;
    let flag = false;
    const handleChange = async(ev) => {
        if (flag = false) {
            previous_value = ev.target.defaultValue;
            flag = true;
        }
        if(ev.target.value !== previous_value) {
            await axios.post('http://localhost:4500/change_price', {
                id: ev.target.id,
                new_price: ev.target.value
            });
        }
        previous_value = ev.target.value;
        setValue(ev.target.value);
    }
  
    return (
      <>
        <input
          id={elem.props.elem.id}
          type="number"
          //value={value}

          defaultValue={elem.props.elem.price}
          onChange={handleChange} />
  
        <p>Value: {value}</p>
      </>
    )
  }

export default Input
/*
function Input(props) {
    const [a, set_a] = useState('changes applied');

    const handleChange = () => {
      if (a === 'changes applied') {
        set_a('make changes')
      } else {
        set_a('changes applied');
      }
    }

    const elem = {props};
    //console.log(elem.props.elem);
    return (
        <>
            <input defaultValue={elem.props.elem.price} onChange={handleChange}/>
            <div>{a}</div>
        </>
    )  
  }
  
  export default Input*/
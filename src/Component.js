import React from 'react'
import axios from 'axios';
import Input from './Input';
import './Css/Component.css';
import {useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
//{//Object.keys(elem.props.elem).map(key => <div key={key}>{elem.props.elem[key]}</div>)}

function Component(props) {

  const [showDelayedText, setShowDelayedText] =  
  useState(['Вы уверены?', 'Да', 'Нет']); 

    const elem = {props};
    //const lenght = {props}.props.lenght;
    const setLength = {props}.props.setLength;
    const id = {props}.props.id;

    let [showModal, setShowModal] = useState(false);
    
    const deleteID = async() => {
      setShowModal(true);
    }

    return (
      <div className='card'>
         <Modal 
    ariaHideApp={false}
    isOpen={showModal}
    onRequestClose={() => setShowModal(false)}
    >
      {showDelayedText[0]}

      <button onClick={async() => {
        setShowDelayedText(['Карточка', 'была', 'удалена']);
        await axios.get('http://localhost:4500/delay');
        setShowModal(false);
        await axios.get(`http://localhost:4500/delete_card/${id}/`);
        setLength(await axios.get('http://localhost:4500/get_length_bd'));
        }}>{showDelayedText[1]}</button>
      <button onClick={() => {setShowModal(false)}}>{showDelayedText[2]}</button>
    </Modal>
        <div className='card_text'>Card</div>
        <button className="close--one" onClick={ deleteID }>❌</button>
        <div className='key_planet'>
          <div>area : {elem.props.elem.area}</div>
          <div>cadastral_number : {elem.props.elem.cadastral_number}</div>
          <div>lotNumber : {elem.props.elem.lotNumber}</div>
          <div>lot_status : {elem.props.elem.lotStatus}</div>
          <i>price :</i> <Input key={elem.props.elem.id} elem={elem.props.elem}/>
          <div>region : {elem.props.elem.region}</div>
          <div>revenue : {elem.props.elem.revenue}</div>
          <div>state : {elem.props.elem.state}</div>
          <div>tenant : {elem.props.elem.tenant}</div>
        </div>  
      </div>
    )  
  }
  
  export default Component
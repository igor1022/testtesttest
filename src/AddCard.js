import React from 'react';
import axios from 'axios';
import {useState, useEffect, useRef } from 'react';
import { useForm } from "react-hook-form";
import Modal from 'react-modal';
import Header1 from "./Header1";
import './Css/AddCard.css';

function AddCard(props) {
    const count_record = {props}.props.count_record;
    const setCountrecord = {props}.props.setCountrecord;
    const { register, handleSubmit } = useForm();

    const [showDelayedText, setShowDelayedText] =  
    useState(['Вы уверены?', 'Да', 'Нет']); 

    let [showModal, setShowModal] = useState(false);
    
    const createID = async() => {
      setShowModal(true);
    }

    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
      }

    return (
        <div>
           <Modal 
      ariaHideApp={false}
      isOpen={showModal}
      onRequestClose={() => setShowModal()}
      >
        {showDelayedText[0]}
  
            <button onClick={
                async() => {//setShowModal(false);
                       //console.log(obj);
                       let obj = await axios.get('http://localhost:4500/get_save_card');
                       let result = await axios.post('http://localhost:4500/add_card', obj.data);
                       setShowDelayedText(['Карточка', 'была', 'добавлена']);
                       await axios.get('http://localhost:4500/delay');
                       //sleep(3000);
                       setShowModal(false);
                       setCountrecord(result.data.count_record);
                    }
            }>{showDelayedText[1]}</button>
            <button onClick={
                () => {setShowModal(false)}
            }>{showDelayedText[2]}</button>
      </Modal>
      <form onSubmit={
        handleSubmit(async (data) => { 
        await createID();
        let result = await axios.post('http://localhost:4500/save_card', {data})
        //console.log(obj);
        //let result = await axios.post('http://localhost:4500/add_card', {data});
        //setCountrecord(result.data.count_record);

        //setShowDelayedText(['Карточка', 'была', 'добавлена']);
        //await axios.get('http://localhost:4500/delay');
        //setShowModal(false);
      })}>
      <Header1 />
      <input className='form_input' type="number" step='0.0001' {...register("area", { required: true })} placeholder="area" />
        <input className='form_input' type="text" {...register("cadastral_number", { required: true })} placeholder="cadastral_number" />
        <input className='form_input' type="number" {...register("lotNumber", { required: true })} placeholder="lotNumber" />
        <input className='form_input' type="number" step='0.0001' {...register("price", { required: true })} placeholder="price" />
        <input className='form_input' type="text" {...register("region", { required: true })} placeholder="region" />
        <input className='form_input' type="number" step='0.0001' {...register("revenue", { required: true })} placeholder="revenue" />
        <input className='form_input' type="text" {...register("state", { required: true })} placeholder="state" />
        <input className='form_input' type="text" {...register("tenant", { required: true })} placeholder="tenant" />
        <button className='gradient-button' type="submit">Submit</button>
    </form>  
        </div>
    )
}  

   /* return (
      <div>
        <form onSubmit={handleSubmit(async(data) => {
        createID();
        let result = await axios.post('http://localhost:4500/add_card', {data});
        setCountrecord(result.data.count_record);

        setShowDelayedText(['Карточка', 'была', 'добавлена']);
        await axios.get('http://localhost:4500/delay');
        setShowModal(false);

        })}><button>{showDelayedText[1]}</button>
      <button onClick={() => {setShowModal(false)}}>{showDelayedText[2]}</button>
        <Modal
    ariaHideApp={false}
    isOpen={showModal}
    onRequestClose={() => setShowModal(false)}
    >
      {showDelayedText[0]}

         <Header1 />
        <input className='form_input' type="number" step='0.0001' {...register("area", { required: true })} placeholder="area" />
        <input className='form_input' type="text" {...register("cadastral_number", { required: true })} placeholder="cadastral_number" />
        <input className='form_input' type="number" {...register("lotNumber", { required: true })} placeholder="lotNumber" />
        <input className='form_input' type="number" step='0.0001' {...register("price", { required: true })} placeholder="price" />
        <input className='form_input' type="text" {...register("region", { required: true })} placeholder="region" />
        <input className='form_input' type="number" step='0.0001' {...register("revenue", { required: true })} placeholder="revenue" />
        <input className='form_input' type="text" {...register("state", { required: true })} placeholder="state" />
        <input className='form_input' type="text" {...register("tenant", { required: true })} placeholder="tenant" />
        <input className='form_input' type="submit" />
        </form>
    </div>
    );
  }*/
export default AddCard;

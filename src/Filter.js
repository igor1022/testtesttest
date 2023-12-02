import React from 'react';
import axios from 'axios';
import {useState, useEffect, useRef } from 'react';
//import './Css/Filter.css';
import { MultiSelect } from 'react-multi-select-component';
  
const Filter = ({setSelected, selected}) => {
    const options = [];
    
    const get_all_state = async() => {
        const states_arr = await axios.get('http://localhost:4500/get_all_state');
        for(let i = 0; i < states_arr.data.length; i++) {
            const opt_numb = {     
                label: states_arr.data[i].state,  
                value: states_arr.data[i].state        
              };
            options.push(opt_numb);
        }
    }
    get_all_state();

    //const [selected, setSelected] = useState([]);
  
    return (
      <div>
        <h1>Select State</h1>
        <pre>{JSON.stringify(selected)}</pre>
        <MultiSelect
          options={options}
          value={selected}
          onChange={setSelected}
          labelledBy='Select'
        />
      </div>
    );
  };
  
  export default Filter;
/*
const Filter = () => {
    const myContainer = useRef(null);
    
    useEffect(() => {
      console.log("myContainer..", myContainer.current);
    });
  
    return (
      <>
        <h1>Ref with react</h1>
        <div ref={myContainer}>I can use the DOM with react ref</div>
      </>
    );
  };
  
  export default Filter;

/*function Filter() {

    const Child1 = React.forwardRef((props, ref) => {
        return <div ref={ref}>Child1</div> 
    });
    
    const Child2 = React.forwardRef((props, ref) => {
        const handleClick= () =>{};
        useImperativeHandle(ref,() => ({
           handleClick
        }))
        return <div>Child2</div> 
    });
    const App = () => {
        const child1 = useRef(null);
        const child2 = useRef(null);
    
        return (
            <>
               <Child1 ref={child1} />
               <Child1 ref={child1} />
            </>
        )
    }

 /* 
    var expanded = false;

    const showCheckboxes = (ev) => {
        console.log(ev);
      var checkboxes = document.getElementById("checkboxes");
      console.log(checkboxes);
      if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
      } else {
        checkboxes.style.display = "none";
        expanded = false;
      }
    }

  return (
    <form>
  <div className="multiselect">
    <div className="selectBox" onClick={showCheckboxes}>
      <select>
        <option>Select an option</option>
      </select>
      <div className="overSelect"></div>
    </div>
    <div id="checkboxes">
      <label htmlFor="one">
        <input type="checkbox" id="one" />First checkbox</label>
      <label htmlFor="two">
        <input type="checkbox" id="two" />Second checkbox</label>
      <label htmlFor="three">
        <input type="checkbox" id="three" />Third checkbox</label>
    </div>
  </div>
</form>
  )
  
}

export default Filter*/
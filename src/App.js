import logo from './logo.svg';
import './App.css';
import {useState, useRef} from 'react';
import Header from './Header';
import Body from './Body';
import Filter from './Filter'
import AddCard from './AddCard';
import './Css/Component.css';

function App() { 
  const [selected, setSelected] = useState([]);
  let [count_record, setCountrecord] = useState();

  return (
    <div>
      <Header />
      <Filter setSelected={setSelected} selected={selected} 
              count_record={count_record}/>
      <AddCard count_record={count_record} setCountrecord={setCountrecord}/>
      <Body selected={selected} count_record={count_record}/>
    </div>
  );
}

export default App;

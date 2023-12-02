import React from 'react';
import { useState, useEffect } from 'react';
import './Css/Header.css';

function Header() {
  //const elem = {props};
  //console.log(elem.props.elem);

 /* useEffect(() => {
    elem.props.elem('Hello Bogdan');
  }, []);  */

  const [auth, setTest] = useState('Username Logout');

  const handler = () => {
    if (auth === 'Username Logout') {
      setTest('Sign in')
    } else {
      setTest('Username Logout');
    }
  }
    return (
        <div className="Header">
          <h1>SFPOPOS</h1>
                <div className="Header-Subtitle">San Franciscos Privately Owned Public Spaces</div>
                <div className='Log'>
                    <button type="button" onClick={handler}>
                      {auth}
                    </button>
                </div>    
        </div>
      )
}

export default Header
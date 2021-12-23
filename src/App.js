import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React, { useState } from 'react';


function App() {
  const [mode,setmode]=useState('dark');

  const toggle=()=>{
    if(mode==='light')
        setmode('dark');
    else
        setmode('light');
  }
  document.body.style.backgroundColor = (mode==='dark'?'black':'white');
  
  return (
    <>
    <div>
      <Navbar title='TextUtils' first='Home' sec='About us' mode={mode} toggle={toggle}/>
      <div className="container">
      <Textarea innertext="Enter your text to analyse" mode={mode}/>
      </div>
    </div>
      
    </>
  );
}

export default App;

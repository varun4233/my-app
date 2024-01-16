//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
// import './index.css'
import Navbar from './components/Navbar';
import Texts from './components/Texts';
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [modes,setmodes]=useState('enable dark mode');
  const [mode , setdarkmode]=useState('light');
  const[alert, setalert]= useState(null);
  const showalert=(message,type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    },1000);

  }
  
  const toggleMode =()=>{
    if(mode ==='light'){
      setdarkmode('dark')
      setmodes('enable light mode')
      document.body.style.backgroundColor='black'
      showalert("dark mode activated","success");
      
    }
   else{
    setdarkmode('light')
    setmodes('enable dark mode')
    document.body.style.backgroundColor='white'
    showalert("light mode activated","success");
    

   }

  }
  return (
    //jsx
    <>
    {/* <BrowserRouter> */}
  <Navbar titles="textutiles" abouttext="About us" mode={mode} toggleMode={toggleMode} modes={modes}/>
  <Alert alert={alert}/>
  

  <div className="container my-3">
  {/* <Routes> */}
          {/* <Route path="/about"element={<About/>}/> */}
            
          <Texts heading="Enter your text below"mode={mode} showalert={showalert}/>
         
          {/* <Route path="/Texts"element={<Texts heading="Enter your text below"mode={mode} showalert={showalert}/>}/> */}
          
          
        {/* </Routes> */}

    

 
  
  </div>
  {/* </BrowserRouter> */}

 
    </>
    

  );
}

export default App;

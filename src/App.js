import React, { useState, useEffect } from "react";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainRoute from "./components/MainRoute";

const App = () => {

  

  const [arraymeme, setArraymeme] = useState([])

  const setMeme =(a)=>{
    const array = [{src: a}, ...arraymeme]
    setArraymeme(array)
    console.log(arraymeme)
    localStorage.setItem('meme',JSON.stringify(array))
  }
  useEffect(() => {
    if(localStorage.getItem('meme')) {
       setArraymeme(JSON.parse(localStorage.getItem('meme')))
      

    }
    console.log(localStorage.getItem('meme'))

  },[]);

  return (
    <div>
      <NavBar />
      <MainRoute arraymeme={arraymeme} setMeme={setMeme} />

    </div>
  );
};

export default App;

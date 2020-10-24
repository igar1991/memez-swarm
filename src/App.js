import React, { useState, useEffect } from "react";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainRoute from "./components/MainRoute";

const App = () => {

  const ar = [{src:1},{src:2},{src:3},{src:4}]

  const [arraymeme, setArraymeme] = useState([])

  const setMeme =(a)=>{
    const array = [{src: a}, ...arraymeme]
    setArraymeme(array)
    console.log(arraymeme)
    localStorage.setItem('meme',JSON.stringify(array))
  }

  const deleteMeme = (meme)=> {
    const array = arraymeme.filter(item=>item.src !==  meme )
    setArraymeme(array)
    console.log(arraymeme)
    localStorage.setItem('meme',JSON.stringify(array))
    console.log(meme)
    
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
      <MainRoute arraymeme={arraymeme} setMeme={setMeme} deleteMeme={deleteMeme} />

    </div>
  );
};

export default App;

import React, { useState } from "react";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainRoute from "./components/MainRoute";

const App = () => {

  const [arraymeme, setArraymeme] = useState([<h1>Hello1</h1>])

  const setMeme =(object)=>{
    setArraymeme([object,...arraymeme])
  }

  return (
    <div>
      <NavBar />
      <MainRoute arraymeme={arraymeme} setMeme={setMeme} />

    </div>
  );
};

export default App;

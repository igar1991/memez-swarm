import React, { useState } from "react";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainRoute from "./components/MainRoute";

const App = () => {
  return (
    <div>
      <NavBar />
      <MainRoute />

    </div>
  );
};

export default App;

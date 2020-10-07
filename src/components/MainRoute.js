import React from 'react';
import MainPage from './MainPage';
import MyMeme from './MyMeme';
import { Switch, Route } from 'react-router-dom'



const MainRoute =()=> (
    <main>
    <Switch>
      <Route exact path='/' component={MainPage}/>
      <Route path='/mymeme' component={MyMeme}/>
    </Switch>
  </main>
)

export default MainRoute;


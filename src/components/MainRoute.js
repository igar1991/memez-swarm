import React from 'react';
import MainPage from './MainPage';
import MyMeme from './MyMeme';
import { Switch, Route } from 'react-router-dom'



const MainRoute =(props)=> (
    <main>
    <Switch>
      <Route exact path='/' component={()=><MainPage {...props} />} />
      <Route path='/mymeme' component={()=><MyMeme {...props} />}/>
    </Switch>
  </main>
)

export default MainRoute;


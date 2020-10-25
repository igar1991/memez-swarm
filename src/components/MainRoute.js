import React from 'react';
import MainPage from './MainPage';
import MyMeme from './MyMeme';
import { Switch, Route } from 'react-router-dom'



const MainRoute =(props)=> (
    <main>
    <Switch>
      <Route exact path='/' component={()=><MainPage {...props} mainarr={props.page1arr} />} />
      <Route exact path='/2' component={()=><MainPage {...props} mainarr={props.page2arr} />} />
      <Route exact path='/3' component={()=><MainPage {...props} mainarr={props.page3arr} />} />
      <Route path='/mymeme' component={()=><MyMeme {...props} />}/>
    </Switch>
  </main>
)

export default MainRoute;


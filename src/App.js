import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './paginas/Home';
import Rooms from './paginas/Rooms';
import SingleRoom from './paginas/SingleRoom';
import Error from './paginas/Error';
import Navbar from './componentes/Navbar';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
   <>
   <Navbar></Navbar>
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/rooms' component={Rooms}></Route>
      <Route exact path='/rooms/:id' component={SingleRoom}></Route>
      <Route component={Error}></Route>
    </Switch>
   </>
  );

}

export default App;

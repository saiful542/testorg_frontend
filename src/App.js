import logo from './logo.svg';
import './App.css';
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Invalid from './Pages/Invalid/Invalid';
import Login from './Pages/Login/Login';
import Bro from './Bro/Bro';
import Mcq from './Pages/Questions/Mcq/Mcq';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          {/* <Route exact path="/">
            <Home></Home>
          </Route> */}
          <Route path="/Mcq">
            <Mcq></Mcq>
          </Route>
          <Route path="/Bro">
            <Bro></Bro>
          </Route>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/Login">
            <Login></Login>
          </Route>
          <Route path="*">
            <Invalid></Invalid>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

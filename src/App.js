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

import Mcq from './Pages/Questions/Mcq/Mcq';
import Form_test from './Form_test/Form_test';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './Context/AuthProvider';
import Exam from './Pages/Exam/Exam';
import ParticlesBackground from './Particle/ParticlesBackground';
import Particles from 'react-tsparticles';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch >
            <Route path={'/Exam'}>
              <Exam className='c-mt'></Exam>
            </Route>
            <Route exact path="/">
              {/* <Home></Home> */}
              <Form_test></Form_test>

            </Route>
            <Route path="/Mcq">
              <Mcq></Mcq>
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

          <ToastContainer />
          <ToastContainer />
        </BrowserRouter>
      </AuthProvider>

    </div >
  );
}

export default App;

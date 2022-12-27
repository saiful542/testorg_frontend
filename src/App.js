import './App.css';
import React from 'react'
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import Invalid from './Pages/Invalid/Invalid';
import Login from './Pages/Login/Login';
import Mcq from './Pages/Questions/Mcq/Mcq';
import Form_test from './Form_test/Form_test';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './Context/AuthProvider';
import Exam from './Pages/Exam/Exam';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Room from './Pages/Room/Room';

function App() {
  return (
    <div className="App bg-gray-100">
      <AuthProvider>

        <BrowserRouter>

          <Header />
          <Routes >
            <Route path="/" element={<Form_test />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Room" element={<Room />} />
            <Route path="/Exam" element={<Exam />} />
            <Route path="/Mcq" element={<Mcq />} />
            <Route path="/Login" element={<Login />} />
            <Route path="*" element={<Invalid />} />
          </Routes >
          <Footer />
          <ToastContainer />
        </BrowserRouter >
      </AuthProvider>

    </div >
  );
}

export default App;

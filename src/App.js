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
import Timer from './Timer/Timer';
import FindRoom from './Pages/FindRoom/FindRoom';
import Student from './Pages/Student/Student';
import MyRooms from './Pages/MyRooms/MyRooms';
import useAuth from './Hooks/useAuth';
import MyProfile from './Pages/MyProfile/MyProfile';
import Confirmed from './Pages/Confirmed/Confirmed';

function App() {

  return (
    <div className="App bg-gray-100">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/myProfile" element={<MyProfile />} />
            <Route path="/student" element={<Student />} />
            <Route path="/myRooms" element={<MyRooms />} />
            <Route path="/student/timer" element={<Timer />} />
            <Route path="/join_Room" element={<FindRoom />} />
            <Route path="/home" element={<Home />} />
            <Route path="/room" element={<Room />} />
            <Route path="/form_test" element={<Form_test />} />
            <Route path="/student/exam" element={<Exam />} />
            <Route path="/login" element={<Login />} />
            <Route path="/confirmed" element={<Confirmed />} />
            <Route path="*" element={<Invalid />} />
          </Routes>
          <Footer />
          <ToastContainer />
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;

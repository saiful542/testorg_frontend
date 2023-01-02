import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useTimer } from 'react-timer-hook';
import Swal from 'sweetalert2';

const Timer = () => {
    const navigate = useNavigate()
    const { state } = useLocation();
    const { time } = state;
    const expiryTimestamp = new Date();
    expiryTimestamp.setTime(expiryTimestamp.getTime() + time);
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
    } = useTimer({
        expiryTimestamp, onExpire: () => {
            navigate('/Exam');
        },
    });
    return (
        <div className='c-mt m-auto min-h-screen py-10'>
            <div>
                <h1 className="text-2xl font-bold pb-20 text-gray-700">Exam will start after</h1>
            </div>
            <div className="flex justify-center gap-8 text-center auto-cols-max m-auto w-full pb-5">
                <div className='nb-custom bg-gradient-to-tr from-indigo-800 via-cyan-500 to-indigo-800 rounded-lg p-5'>
                    <span className="countdown font-mono text-8xl text-gray-50">
                        <span style={{ "--value": hours }}></span>
                    </span>
                    <span className='text-gray-100 pl-2'>hours</span>
                </div>
                <div className='nb-custom bg-gradient-to-tr from-indigo-800 via-cyan-500 to-indigo-800 rounded-lg p-5'>
                    <span className="countdown font-mono text-8xl text-gray-50">
                        <span style={{ "--value": minutes }}></span>
                    </span>
                    <span className='text-gray-100 pl-2'>min</span>
                </div>
                <div className='nb-custom bg-gradient-to-tr from-indigo-800 via-cyan-500 to-indigo-800 rounded-lg p-5'>
                    <span className="countdown font-mono text-8xl text-gray-50">
                        <span style={{ "--value": seconds }}></span>
                    </span>
                    <span className='text-gray-100 pl-2'>sec</span>
                </div>
            </div>
        </div>
    )

}

export default Timer
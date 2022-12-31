import React from 'react'
import { useTimer } from 'react-timer-hook';
import Swal from 'sweetalert2';

const Timer = () => {
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 300); // 10 minutes timer
    // console.log((expiryTimestamp.getSeconds() + 10))
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
    } = useTimer({
        expiryTimestamp, onExpire: () => Swal.fire({ icon: 'success', title: 'Session Expired', text: 'Exam time is over' }),
    });
    return (
        <div className='c-mt m-auto min-h-screen'>
            <div className="flex justify-center gap-5 text-center auto-cols-max m-auto w-full nb-custom bg-gradient-to-r from-indigo-800 via-cyan-500 to-indigo-800 pb-5">
                <div className=''>
                    <span className="countdown font-mono text-5xl text-white">
                        <span style={{ "--value": hours }}></span>
                    </span>
                    <span  className='text-gray-300'>hours</span>
                </div>
                <div>
                    <span className="countdown font-mono text-5xl text-white">
                        <span style={{ "--value": minutes }}></span>
                    </span>
                    <span  className='text-gray-300'>min</span>
                </div>
                <div>
                    <span className="countdown font-mono text-5xl text-white">
                        <span style={{ "--value": seconds }}></span>
                    </span>
                    <span className='text-gray-300'>sec</span>
                </div>
            </div>
            {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
        </div>
    )

}

export default Timer
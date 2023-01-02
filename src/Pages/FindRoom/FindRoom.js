import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const FindRoom = () => {
    const [roomId, setRoomId] = useState(false);
    const [code, getCode] = useState();
    const [pp, setPp] = useState(false);
    const navigate = useNavigate()
    const room = {
        room_id: '618240',
        startTime: "mon Jan 02 2023 4:00:00 PM",
        endTime: "mon Jan 02 2023 6:00:00 PM",
        courseName: "dasd",
        teacherName: "saiful542d",
        totalMarks: 14,
        createdAt: "2023-01-01T07:14:59.885Z",
        question: [
            {
                "question": "how are you?",
                "marks": "3",
                "correct_answer": "true",
                "options": [
                    "true",
                    "false"
                ],
                "question_type": "true-false",
                "q_id": 1
            },
            {
                "question": "vbfdb",
                "marks": "3",
                "correct_answer": "aa",
                "question_type": "fill-blanks",
                "q_id": 2
            },
            {
                "question": "how are you?",
                "marks": "3",
                "correct_answer": "aa",
                "question_type": "fill-blanks",
                "q_id": 3
            },
            {
                "question": "ads",
                "marks": "2",
                "correct_answer": "a",
                "question_type": "fill-blanks",
                "q_id": 4
            },
            {
                "question": "vbfdb",
                "marks": "3",
                "correct_answer": "true",
                "options": [
                    "true",
                    "false"
                ],
                "question_type": "true-false",
                "q_id": 5
            }
        ]
    }
    const checkRoom = () => {

        console.log(code, room.room_id)
        if (code == room.room_id) {
            setRoomId(true);
            setPp(true);
            navigate('/Exam', { state: { room: room,  } });
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Room ID is incorrect',
                text: 'Please enter correct room ID',
                confirmButtonText: 'Try again',
            })
        }
    }
    return (
        <div className='container m-auto c-mt py-10 min-h-screen'>
            <div>
                <h1 className='text-3xl font-bold'>Find Your Exam</h1>
                <div className='text-start pt-20'><label htmlFor="input" className='text-xl text-gray-400 font-semibold'>Enter the code that you have given by your teacher</label><input onInput={(e) => getCode(e.target.value)} className='text-xl mt-5 h-14 input border-2  border-cyan-700' type="text" placeholder='ex : 64256479' /></div>
                <div className='pt-40'>
                    <button onClick={() => checkRoom()} className='nb-custom bg-gradient-to-r from-indigo-800 via-cyan-500 to-indigo-800 btn  text-white px-16 hover:bg-indigo-700'>Find</button>
                </div>
            </div>
        </div>
    );
}

export default FindRoom;

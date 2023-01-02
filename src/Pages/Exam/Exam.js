import React from 'react';
import { useState } from 'react';
import { useTimer } from 'react-timer-hook';
import Swal from 'sweetalert2';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { ButtonRoot } from '@mui/joy/Button/Button';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

const Exam = () => {
    const navigate = useNavigate()
    const [roomId, setRoomId] = useState(true);
    const [code, getCode] = useState();
    const [expired, setExpired] = useState(true);
    const [pp, setPp] = useState(true);
    // const { state } = useLocation();
    // const { room } = state;
    const room = {
        room_id: '618240',
        startTime: "mon Jan 02 2023 7:37:00 PM",
        endTime: "mon Jan 02 2023 7:52:00 PM",
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
    const questions = [
        {
            "question": "first one",
            "marks": "2",
            "options": [
                "song",
                "dance"
            ],
            "correct_answer": "song",
            "question_type": "mcq",
            "q_id": 1
        },
        {
            "question": "second one __",
            "marks": "1",
            "correct_answer": "yes",
            "question_type": "fill-blanks",
            "q_id": 2
        },
        {
            "question": "i am ok",
            "marks": "1",
            "correct_answer": "false",
            "options": [
                "true",
                "false"
            ],
            "question_type": "true-false",
            "q_id": 3
        },
        {
            "question": "tv or radio",
            "marks": "2",
            "options": [
                "tv",
                "pen",
                "radio"
            ],
            "correct_answer": "tv",
            "question_type": "mcq",
            "q_id": 4
        },
        {
            "question": "not __ be true",
            "marks": "3",
            "correct_answer": "to",
            "question_type": "fill-blanks",
            "q_id": 5
        },
        {
            "question": "yellow shirt",
            "marks": "1",
            "correct_answer": "true",
            "options": [
                "true",
                "false"
            ],
            "question_type": "true-false",
            "q_id": 6
        }
    ]
    const [answers, setAnswers] = useState([]);
    const [count, setCount] = useState(1)
    const [newQuestion, setNewQuestion] = useState([questions[0]])
    const [input, setInput] = useState(false)
    // const [totalMarks, setTotalMarks] = useState(parseInt(newQuestion[0].marks));

    const changeQuestion = () => {
        setInput(false)
        const filtered_questions = questions.filter((question) => {
            return questions.indexOf(question) === count
        });
        setNewQuestion(filtered_questions);
        if (count >= questions.length) {
            Swal.fire({
                icon: 'success',
                title: 'Good job!',
                text: `You have answred ${answers.length} questions! out of ${questions.length}`,
                confirmButtonText: 'see result',
            }).then(() => {
                Swal.fire({
                    icon: 'info',
                    title: `you have got ${7} marks out of ${room.totalMarks}!`,
                }).then(() => {
                    navigate('/Home')
                })
            })
        }
        // setTotalMarks(totalMarks + parseInt(newQuestion[0].marks))
        // console.log(totalMarks)
    }
    const expiryTimestamp = new Date();
    const remainingTime = (time) => {
        console.log(time)
        expiryTimestamp.setTime(expiryTimestamp.getTime() + time);
    }
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
    } = useTimer({
        expiryTimestamp, onExpire: () => {
            if (!expired) {
                Swal.fire({ icon: 'success', title: 'Exam over!!', text: `You have answred ${answers.length} questions! out of ${questions.length}`, confirmButtonText: "see result", }).then(() => {
                    Swal.fire({
                        icon: 'info',
                        title: `you have got ${7} marks out of ${room.totalMarks}!`,
                        confirmButtonText: "Go back to home"
                    }).then(() => {
                        navigate('/Home');
                    })
                })

            }
        }
    });
    let startTime = new Date(`${room.startTime}`).getTime();
    let endTime = new Date(`${room.endTime}`).getTime();
    let currentTime = new Date().getTime();
    if (pp) {
        if (startTime > currentTime) {
            Swal.fire({
                width: '40vw',
                icon: 'alert',
                title: `Exam has not been started yet!`,
                text: 'Exam will start at ' + new Date(`${room.startTime}`).toLocaleTimeString(),
                confirmButtonText: "Wait...",
            }).then(() => {
                navigate('/Timer', { state: { time: (startTime - currentTime) } });
            })
        }
        else if (currentTime >= startTime && currentTime < endTime) {
            remainingTime(endTime - currentTime)
            Swal.fire({
                width: '50vw',
                title: `Exam has been started ${new Date(currentTime)?.getHours() - new Date(startTime)?.getHours()} hours  ${new Date(currentTime - startTime).getMinutes()} minutes ago`,
                html: `<p style='color:green'>you have ${new Date(endTime)?.getHours() - new Date(currentTime)?.getHours()} hours ${new Date(endTime - currentTime)?.getMinutes()} minutes to finish the exam</p>`,
                confirmButtonText:
                    'Continue Exam',
            })
            setExpired(false);
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Exam has been ended!',
                confirmButtonText: "Go back to home",
            }).then(() => {
                navigate('/Home');
            })
        }
        setPp(false)
    }
    return (
        <div className='container m-auto c-mt py-10 min-h-screen'>
            {
                isRunning ? <div >
                    <div className="mb-20 flex justify-center gap-8 text-center auto-cols-max m-auto w-full">
                        <div className=''>
                            <span className="countdown font-mono text-5xl text-gray-600">
                                <span style={{ "--value": hours }}></span>
                            </span>
                            <span className='text-gray-500 pl-2'>hours</span>
                        </div>
                        <div>
                            <span className="countdown font-mono text-5xl text-gray-600">
                                <span style={{ "--value": minutes }}></span>
                            </span>
                            <span className='text-gray-500 pl-2'>min</span>
                        </div>
                        <div>
                            <span className="countdown font-mono text-5xl text-gray-600">
                                <span style={{ "--value": seconds }}></span>
                            </span>
                            <span className='text-gray-500 pl-2'>sec</span>
                        </div>
                    </div>
                    <div className='m-auto flex flex-col gap-20 lg:w-2/3 rounded-md text-gray-800 text-xl '>
                        {
                            newQuestion.map((element) => {
                                if (element.question_type === 'true-false') {
                                    return <ShowTrue setInput={setInput} answers={answers} setAnswers={setAnswers} index={count} question={element.question} marks={element.marks}></ShowTrue>
                                }
                                else if (element.question_type === 'mcq') {
                                    return <ShowQuiz setInput={setInput} answers={answers} setAnswers={setAnswers} index={count} question={element.question} marks={element.marks} options={element.options}></ShowQuiz>
                                }
                                else if (element.question_type === 'fill-blanks') {
                                    return <ShowGaps setInput={setInput} answers={answers} setAnswers={setAnswers} index={count} question={element.question} marks={element.marks}></ShowGaps>
                                }

                            })
                        }
                    </div>
                    <div className="button-wrapper text-end lg:w-2/3 m-auto pt-10">
                        {
                            input ? <button onClick={() => { changeQuestion(); setCount(count + 1) }} className='nb-custom bg-gradient-to-r from-indigo-800 via-cyan-500 to-indigo-800 btn  text-white px-16 hover:bg-indigo-700'>Next &nbsp;&nbsp;&rarr;</button> : <button disabled title='give an answer first' className='btn transition-all px-16 disabled:text-gray-600'>Next &nbsp;&nbsp;&rarr;</button>
                        }
                    </div>
                </div> : <div>

                </div>
            }

        </div>
    );
};

export default Exam;





const ShowQuiz = (props) => {
    const { index, question, marks, options, setAnswers, answers, setInput } = props;
    const inputValue = (e) => {
        let arr = [...answers];
        arr[index - 1] = e
        setAnswers(arr)
        setInput(true)
    }

    return (
        <div className='rounded-lg flex flex-col gap-10 p-10 py-16 shadow-lg border-l-8 border-l-cyan-600 bg-white'>
            <div className='flex items-center justify-between'>
                <span className='flex gap-5 items-center'>
                    <p>{index}.</p>
                    <h3 className=''>{question} ?</h3>
                </span>
                <p className='self-end'>{marks}<span className='text-sm'> marks</span></p>
            </div>
            <div className='flex flex-col gap-5'>
                {
                    options.map((option) => {
                        return (
                            <div className="radio-group flex gap-4 items-center ">
                                <input onInput={() => { inputValue(option) }} type="radio" name="radio" className="radio-field radio border-2 border-cyan-600 radio-accent" />
                                <p>{option}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
const ShowGaps = (props) => {
    const { index, question, marks, setAnswers, answers, setInput } = props;
    const inputValue = (e) => {
        let arr = [...answers];
        arr[index - 1] = e
        setAnswers(arr);
        setInput(true)
    }

    return (
        <div className='rounded-lg flex flex-col gap-10 p-10 py-16 shadow-lg border-l-8 border-l-cyan-600 bg-white'>
            <div className='flex items-center justify-between'>
                <span className='flex gap-5 items-center'>
                    <p>{index}.</p>
                    <h3 className=''>{question} ?</h3>
                </span>
                <p className='self-end'>{marks}<span className='text-sm'> marks</span></p>
            </div>
            <div className="gap-4 border-cyan-600 border-b-2 w-1/2">
                <input onInput={(e) => { inputValue(e.target.value) }} className='text-field border-none text-xl rounded-md' type="text" placeholder='answer' autoFocus />
            </div>
        </div>
    )
}
const ShowTrue = (props) => {
    const { index, question, marks, setAnswers, answers, setInput } = props;
    const inputValue = (e) => {
        let arr = [...answers];
        arr[index - 1] = e
        setAnswers(arr);
        setInput(true)
    }

    return (
        <div className='rounded-lg flex flex-col gap-10 p-10 py-16 shadow-lg border-l-8 border-l-cyan-600 bg-white'>
            <div className='flex items-center justify-between'>
                <span className='flex gap-5 items-center'>
                    <p>{index}.</p>
                    <h3 className=''>{question} ?</h3>
                </span>
                <p className='self-end'>{marks}<span className='text-sm'> marks</span></p>
            </div>
            <div className='flex flex-col gap-5'>
                <div className="radio-group flex gap-4">
                    <input onInput={(e) => { inputValue(e.target.value) }} type="radio" name="radio" className="radio-field radio border-2 border-cyan-600 radio-accent" value={'true'} />
                    <p>true</p></div>
                <div className="radio-group flex gap-4">
                    <input onInput={(e) => { inputValue(e.target.value) }} type="radio" name="radio" className="radio-field radio border-2 border-cyan-600 radio-accent" value={'false'} />
                    <p>false</p></div>
            </div>
        </div>

    )
}



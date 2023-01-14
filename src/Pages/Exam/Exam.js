import React from 'react';
import { useState } from 'react';
import { useTimer } from 'react-timer-hook';
import Swal from 'sweetalert2';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { ButtonRoot } from '@mui/joy/Button/Button';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';

const Exam = () => {
    const { validUser } = useState()
    const navigate = useNavigate()
    const [expired, setExpired] = useState(true);
    const [isFinished, setIsFinished] = useState(false);
    const [firstime, setFirstime] = useState(true);
    if (!useLocation().state) {
        Swal.fire({
            title: 'Something went wrong',
            icon: 'error',
            text: 'please try again later',
            confirmButtonText: 'back to homepage',
        }).then(() => {
            window.location.assign(`${window.location.origin}/Home`);
        })
    }
    const { state } = useLocation();
    const { room } = state;




    // const room = {

    //     room_id: '618240',
    //     startTime: "fri Jan 13 2023 8:00:00 PM",
    //     endTime: "fri Jan 13 2023 9:20:00 PM",
    //     courseName: "dasd",
    //     teacherName: "saiful542d",
    //     totalMarks: 14,
    //     createdAt: "2023-01-01T07:14:59.885Z",
    //     question: [
    //         {
    //             "question": "how are you?",
    //             "marks": "3",
    //             "correct_answer": "true",
    //             "options": [
    //                 "true",
    //                 "false"
    //             ],
    //             "question_type": "true-false",
    //             "q_id": 1
    //         },
    //         {
    //             "question": "when the Metro Rail mega project was declared?",
    //             "correct_answer": "2012",
    //             "options": [
    //                 "2012",
    //                 "2010",
    //                 "2016"
    //             ],
    //             "question_type": "mcq",
    //             "marks": "3",
    //             "q_id": 2
    //         },
    //         {
    //             "question": "how are you?",
    //             "marks": "3",
    //             "correct_answer": "aa",
    //             "question_type": "fill-blanks",
    //             "q_id": 3
    //         },
    //         {
    //             "question": "ads",
    //             "marks": "2",
    //             "correct_answer": "a",
    //             "question_type": "fill-blanks",
    //             "q_id": 4
    //         },
    //         {
    //             "question": "vbfdb",
    //             "marks": "3",
    //             "correct_answer": "true",
    //             "options": [
    //                 "true",
    //                 "false"
    //             ],
    //             "question_type": "true-false",
    //             "q_id": 5
    //         }
    //     ]
    // }






    // randomizing the question and options
    // randomizing the question and options
    const getRandom = (array) => {
        let ranNums = [],
            length = array.length,
            index = 0;
        while (length--) {
            index = Math.floor(Math.random() * (length + 1));
            if (array[index]?.question_type === 'mcq') {
                array[index].options = getRandom(array[index].options)
            }
            ranNums.push(array[index]);
            array.splice(index, 1);
        }
        return ranNums;
    }
    const getQuestions = [
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

            "question": "when the Metro Rail mega project was declared?",
            "correct_answer": "2012",
            "options": [
                "2012",
                "2010",
                "2016"
            ],
            "question_type": "mcq",
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
    const questions = getRandom(getQuestions)
    // randomizing the question and options
    const [answers, setAnswers] = useState([]);
    const [count, setCount] = useState(1)
    const [newQuestion, setNewQuestion] = useState([questions[0]])
    const [input, setInput] = useState(false)

    const submitResult = () => {
        const result = {
            token: validUser.token,
            negMark: room.negMark,
            roomID: room.roomID,
            studentAnswer: answers
        }
    }

    const changeQuestion = () => {
        setInput(false)

        if (count >= questions.length) {
            submitResult();
            setIsFinished(true);
            Swal.fire({
                icon: 'success',
                title: 'Good job!',
                html: `<h1><b>You have answred ${answers.length} questions! out of ${questions.length}</b></h1>
                <br>
                <p className='animate-pulse'>You can find your result in your room</p>`,
                confirmButtonText: 'Ok',
            })
            return;
        }
        const filtered_questions = questions.filter((question) => {
            return questions.indexOf(question) === count
        });
        setNewQuestion(filtered_questions);
    }
    const expiryTimestamp = new Date();
    const remainingTime = (time) => {
        // console.log('from exam', time)
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
                submitResult();
                setIsFinished(true);
                Swal.fire({
                    icon: 'success',
                    title: 'Good job!',
                    html: `<h1><b>You have answred ${answers.length} questions! out of ${questions.length}</b></h1>
                    <br>
                    <p className='animate-pulse'>You can find your result in your room</p>`,
                    confirmButtonText: 'Ok',
                })
            }
        }
    });
    let startTime = new Date(`${room.startTime}`).getTime();
    let endTime = new Date(`${room.endTime}`).getTime();
    let currentTime = new Date().getTime();
    if (firstime) {
        if (currentTime >= startTime && currentTime < endTime) {
            setIsFinished(false);
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
        else if (startTime > currentTime) {
            setIsFinished(true);
            Swal.fire({
                width: '40vw',
                icon: 'info',
                title: 'This exam has not started yet',
                text: `Exam will start on  ${new Date(`${room.startTime}`).toDateString().split('T')[0]}  at  ${new Date(`${room.startTime}`).toLocaleTimeString()}`,
                showCancelButton: true,
                confirmButtonText: 'Go to waiting room',
            })

        }
        else {
            setIsFinished(true);
            Swal.fire({
                width: '40%',
                title: 'This exam has already ended',
                text: 'to see result go to your room!',
                icon: 'error',
            })
        }
        setFirstime(false)
    }
    return (
        <div className='container m-auto c-mt py-5 min-h-screen'>
            <div className='rounded-2xl shadow-lg text-start z-40 mb-16'>
                <div className='z-40'>
                    <div tabIndex={0} class="cursor-pointer dropdown animate__animated animate__slideInRight z-40 transition-all">
                        <span className='shadow-inner rounded-2xl px-20 py-2 flex items-baseline gap-10 bg-gray-200 hover:bg-slate-300  hover:text-blue-600 hover:shadow-2xl transition-all'><h1 className='text-xl font-semibold'>Details</h1><i class="fas fa-duotone fa-circle-info"></i></span>
                        <div tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-40 transition-all">
                            <div className="overflow-x-auto">
                                <table className="table w-full">
                                    <thead>
                                        <tr>
                                            <th className='text-3xl'>Exam details</th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='text-2xl'>Total marks</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td><p className='text-gray-300 text-xl pr-20'>{room.totalMarks}</p></td>
                                        </tr>


                                        <tr>
                                            <td className='text-2xl'>Teacher</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td><p className='text-gray-300 text-xl pr-20'>{room.teacherName}</p></td>
                                        </tr>
                                        <tr>
                                            <td className='text-2xl'>Course</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td><p className='text-gray-300 text-xl pr-20'>{room.courseName}</p></td>
                                        </tr>
                                        <tr>
                                            <td className='text-2xl'>Ending at</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td><p className='text-gray-300 text-xl pr-20'>{new Date(room.endTime).toLocaleTimeString()}</p></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className='border-2 border-cyan-700 px-5 py-2 bg-white flex-1 rounded-bl-lg'>
                    <p className='text-gray-500 text-xl'>Exam Date</p>
                    <p className='text-gray-700 text-lg'>{date.$d.toDateString()}</p>
                </div>
                <div className='border-2 border-cyan-700 px-5 py-2  bg-white flex-1'>
                    <p className='text-gray-500 text-xl'>Start at</p>
                    <p className='text-gray-700 text-lg'>{startTime.$d.toLocaleTimeString()}</p>
                </div>
                <div className='border-2 border-cyan-700 px-5 py-2 bg-white flex-1'>
                    <p className='text-gray-500 text-xl'>End at</p>
                    <p className='text-gray-700 text-lg'>{endTime.$d.toLocaleTimeString()}</p>
                    
                </div>
                <div className='border-2 border-cyan-700 px-5 py-2  bg-white flex-1'>
                    <p className='text-gray-500 text-xl'>Teacher</p>
                    <p className='text-gray-700 text-lg'>{teacherName}</p>
                </div>
                <div className='border-2 border-cyan-700 px-5 py-2  bg-white flex-1 rounded-br-lg'>
                    <p className='text-gray-500 text-xl'>Course</p>
                    
                </div> */}
            </div>
            {
                !isFinished ? <div >
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
                                    return <ShowTrue key={count} setInput={setInput} answers={answers} setAnswers={setAnswers} index={count} question={element.question} marks={element.marks}></ShowTrue>
                                }
                                else if (element.question_type === 'mcq') {
                                    return <ShowQuiz key={count} setInput={setInput} answers={answers} setAnswers={setAnswers} index={count} question={element.question} marks={element.marks} options={element.options}></ShowQuiz>
                                }
                                else if (element.question_type === 'fill-blanks') {
                                    return <ShowGaps key={count} setInput={setInput} answers={answers} setAnswers={setAnswers} index={count} question={element.question} marks={element.marks}></ShowGaps>
                                }

                            })
                        }
                    </div>
                    <div className="button-wrapper text-end lg:w-2/3 m-auto pt-10">
                        {
                            input ? <button onClick={() => { changeQuestion(); setCount(count + 1) }} className='nb-custom bg-gradient-to-r from-indigo-800 via-cyan-500 to-indigo-800 btn  text-white px-16 hover:bg-indigo-700'>Next &nbsp;&nbsp;&rarr;</button> : <button disabled title='give an answer first' className='btn transition-all px-16 disabled:text-gray-600'>Next &nbsp;&nbsp;&rarr;</button>
                        }
                    </div>
                </div> : <div className='pt-72'>
                    <Link to={'/Home'} className=' transition-all button-custom bg-gradient-to-tr from-indigo-800 via-cyan-500 to-indigo-800 btn  text-white px-16 hover:bg-indigo-700 hover:tracking-widest border-none'>Go back to Home</Link>
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
        <div className='rounded-lg flex flex-col gap-10 p-10 py-16 shadow-lg border-l-8 border-l-cyan-600 bg-white animate__animated animate__fadeIn'>
            <div className='flex items-center justify-between'>
                <span className='flex gap-5 items-center'>
                    <p className='text-2xl'>{index}.</p>
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
        <div className='rounded-lg flex flex-col gap-10 p-10 py-16 shadow-lg border-l-8 border-l-cyan-600 bg-white animate__animated animate__fadeIn'>
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
        <div className='rounded-lg flex flex-col gap-10 p-10 py-16 shadow-lg border-l-8 border-l-cyan-600 bg-white animate__animated animate__fadeIn'>
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



import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';

const Exam = () => {
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
    console.log(answers);

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
                text: `you have answered ${count}/${count} questions!`,

            })
        }


    }
    return (
        <div className='container m-auto c-mt pt-20 pb-10 h-screen'>
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
                    input ? <button onClick={() => { changeQuestion(); setCount(count + 1) }} className='nb-custom bg-gradient-to-r from-indigo-800 to-cyan-500 btn  text-white px-16 hover:bg-indigo-700'>Next &nbsp;&nbsp;&rarr;</button> : <button disabled title='give an answer first' className='btn transition-all px-16 disabled:text-gray-600'>Next</button>
                    // count <= questions.length ? <button onClick={() => { changeQuestion(); setCount(count + 1) }} className='nb-custom bg-gradient-to-r from-indigo-800 to-cyan-500 btn  text-white px-16 hover:bg-indigo-700'>Next &nbsp;&nbsp;&rarr;</button> : <button className='nb-custom bg-gradient-to-r from-indigo-800 to-cyan-500 btn  text-white px-16 hover:bg-indigo-700'>Next &nbsp;&nbsp;&rarr;</button>
                }
            </div>
        </div >
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
        <div className='rounded-lg flex flex-col gap-10 p-10 py-16 shadow-lg border-l-8 border-l-indigo-700 bg-stone-100'>
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
                                <input onInput={() => { inputValue(option) }} type="radio" name="radio" className="radio-field radio border-2 border-indigo-300 radio-accent" />
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
        <div className='rounded-lg flex flex-col gap-10 p-10 py-16 shadow-lg border-l-8 border-l-indigo-700 bg-stone-100'>
            <div className='flex items-center justify-between'>
                <span className='flex gap-5 items-center'>
                    <p>{index}.</p>
                    <h3 className=''>{question} ?</h3>
                </span>
                <p className='self-end'>{marks}<span className='text-sm'> marks</span></p>
            </div>
            <div className="gap-4 border-indigo-400 border-b-2 w-1/2">
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
        <div className='rounded-lg flex flex-col gap-10 p-10 py-16 shadow-lg border-l-8 border-l-indigo-700 bg-stone-100'>
            <div className='flex items-center justify-between'>
                <span className='flex gap-5 items-center'>
                    <p>{index}.</p>
                    <h3 className=''>{question} ?</h3>
                </span>
                <p className='self-end'>{marks}<span className='text-sm'> marks</span></p>
            </div>
            <div className='flex flex-col gap-5'>
                <div className="radio-group flex gap-4">
                    <input onInput={(e) => { inputValue(e.target.value) }} type="radio" name="radio" className="radio-field radio border-2 border-indigo-300 radio-accent" value={'true'} />
                    <p>true</p></div>
                <div className="radio-group flex gap-4">
                    <input onInput={(e) => { inputValue(e.target.value) }} type="radio" name="radio" className="radio-field radio border-2 border-indigo-300 radio-accent" value={'false'} />
                    <p>false</p></div>
            </div>
        </div>

    )
}



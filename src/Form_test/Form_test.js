import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import Fill_gaps from '../Pages/Questions/Fill_gaps/Fill_gaps';

import Mcq from '../Pages/Questions/Mcq/Mcq';
import True_false from '../Pages/Questions/True_false/True_false';

const Form_test = () => {

    const [questionFormData, setQuestionFormData] = useState([])
    const [questionForm, setQuestionForm] = useState([])
    const [isValidQsn, setIsValidQsn] = useState(true)
    const [totalMarks, setTotalMarks] = useState(0);
    const { date, startTime, endTime, courseName, teacher } = useLocation('/Room');
    console.log(date)
    // const { date, startTime, endTime, courseName, teacher } = state;
    // add question
    const addQuestion = (value) => {
        setQuestionForm((previous) => {
            return [...previous, { q_id: questionForm.length + 1, value: value }]
        })
        // console.log(questionForm);
        setIsValidQsn(false)
    }

    // delete question
    const deleteQuestion = (q_id) => {
        const filtered_questions = questionForm.filter((question) => {
            return question.q_id !== q_id;
        })

        setQuestionForm(filtered_questions)
        questionFormData.splice((q_id - 1), 1)

    }

    // save data
    const saveData = () => {
        Swal.fire({
            title: 'Created exam',
            text: 'send the exam link to your student',
            icon: 'success',
            confirmButtonText: 'ok'
        })
        console.log(questionFormData);
        localStorage.setItem('question', JSON.stringify(questionFormData))
    }
    return (
        <div className='m-auto mb-20 c-mt pb-5 min-h-screen'>
            <div className="container flex flex-col gap-10 m-auto justify-between relative ">
                <div className="bottom flex flex-col lg:w-4/5 gap-20 w-full pt-10 m-auto">
                    {
                        questionForm.map((question, index) => {
                            if (question.value === 'mcq') {
                                return <Mcq className='border-2' index={index + 1} questionFormData={questionFormData} setQuestionFormData={setQuestionFormData} q_id={question.q_id} key={question.q_id} deleteQuestion={deleteQuestion} setIsValidQsn={setIsValidQsn} totalMarks={totalMarks} setTotalMarks={setTotalMarks}></Mcq>
                            }
                            else if (question.value === 'true-false') {
                                return <True_false index={index + 1} questionFormData={questionFormData} setQuestionFormData={setQuestionFormData} q_id={question.q_id} key={question.q_id} deleteQuestion={deleteQuestion} setIsValidQsn={setIsValidQsn} totalMarks={totalMarks} setTotalMarks={setTotalMarks}></True_false>
                            }
                            else if (question.value === 'fill-blanks') {
                                return <Fill_gaps index={index + 1} questionFormData={questionFormData} setQuestionFormData={setQuestionFormData} q_id={question.q_id} key={question.q_id} deleteQuestion={deleteQuestion} setIsValidQsn={setIsValidQsn} totalMarks={totalMarks} setTotalMarks={setTotalMarks}></Fill_gaps>
                            }
                        })
                    }
                </div>
                <div className=" flex flex-col sticky bottom-0 p-2 shadow-lg rounded-md z-20 bg-white w-full lg:w-2/3 m-auto border-dotted border-2 border-black">
                    <div className='flex'>
                        <button className={`btn flex-1 m-2 font-bold py-2 px-4 rounded  ${isValidQsn ? 'border-none hover:opacity-80 hover:text-black bg-gradient-to-tr from-indigo-800 to-cyan-600  text-white' : 'btn-disabled'}`} onClick={() => { addQuestion('mcq') }}>MCQ</button>
                        <button className={`btn flex-1 m-2 font-bold py-2 px-4 rounded ${isValidQsn ? 'border-none hover:opacity-80 hover:text-black bg-gradient-to-tr from-indigo-800 to-cyan-600 text-white' : 'btn-disabled'}`} onClick={() => { addQuestion('true-false') }}>True / False</button>
                        <button className={`btn flex-1 m-2 font-bold py-2 px-4 rounded ${isValidQsn ? 'border-none hover:opacity-80 hover:text-black bg-gradient-to-tr from-indigo-800 to-cyan-600 text-white' : 'btn-disabled'}`} onClick={() => { addQuestion('fill-blanks') }}>Fill Blanks</button>
                    </div>
                    {
                        questionForm.length >= 5 ? <button title='save' className='m-2  bg-gradient-to-tr from-green-700 via-gray-300 to-green-400 text-white font-bold py-2 px-4 rounded nb-custom' onClick={() => saveData()}>save question&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-duotone fa-floppy-disk" /></button> : <button title='you have to make at least 5 questions' className='m-2 hover:bg-green-600 button-custom bg-gradient-to-tr from-green-800 via-green-600 to-green-800 text-white font-bold py-2 px-4 rounded text-xl' onClick={() => Swal.fire({
                            title: 'you have to make at least 5 questions',
                            icon: 'warning',
                            confirmButtonText: 'ok'
                        })}>save question&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fas fa-duotone fa-floppy-disk" /></button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Form_test;





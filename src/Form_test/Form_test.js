import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import Fill_gaps from '../Pages/Questions/Fill_gaps/Fill_gaps';

import Mcq from '../Pages/Questions/Mcq/Mcq';
import True_false from '../Pages/Questions/True_false/True_false';

const Form_test = () => {

    const [questionFormData, setQuestionFormData] = useState([])
    const [questionForm, setQuestionForm] = useState([])
    const [isValidQsn, setIsValidQsn] = useState(true)
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
        <div className='m-auto mb-40 c-mt relative'>
            <div className="container  lg:flex gap-10 m-auto justify-between relative">
                <div className="h-1/4 flex flex-col sticky top-16 py-5 px-2 shadow-lg rounded-md z-20 bg-white">
                    <div className='flex'>
                        <button className={`flex-1 btn m-2 font-bold py-2 px-4 rounded  ${isValidQsn ? 'border-none hover:opacity-80 hover:text-black bg-gradient-to-tr from-indigo-800 via-cyan-500 btn to-indigo-800  text-white' : 'btn-disabled'}`} onClick={() => { addQuestion('mcq') }}>MCQ</button>
                        <button className={`flex-1 m-2 font-bold py-2 px-4 rounded ${isValidQsn ? 'border-none hover:opacity-80 hover:text-black bg-gradient-to-br from-indigo-800 via-cyan-500 btn to-indigo-800  text-white' : 'btn-disabled'}`} onClick={() => { addQuestion('true-false') }}>True / False</button>
                        <button className={`flex-1 m-2 font-bold py-2 px-4 rounded ${isValidQsn ? 'border-none hover:opacity-80 hover:text-black bg-gradient-to-tr from-indigo-800 via-cyan-500 btn to-indigo-800 text-white' : 'btn-disabled'}`} onClick={() => { addQuestion('fill-blanks') }}>Fill Blanks</button>
                    </div>
                    {
                        questionForm.length >= 5 ? <button title='save' className='m-2  bg-gradient-to-tr from-green-700 via-gray-300 to-green-400 text-white font-bold py-2 px-4 rounded nb-custom' onClick={() => saveData()}>save question</button> : <button title='you have to make at least 5 questions' className='m-2 hover:bg-green-600 button-custom bg-gradient-to-tr from-green-800 via-green-600 to-green-800 text-white font-bold py-2 px-4 rounded' onClick={() => Swal.fire({
                            title: 'you have to make at least 5 questions',
                            icon: 'warning',
                            confirmButtonText: 'ok'
                        })}>save question</button>
                    }
                </div>
                <div className="bottom flex flex-col lg:w-2/3 gap-20 w-full">
                    {
                        questionForm.map((question, index) => {
                            if (question.value === 'mcq') {
                                return <Mcq index={index + 1} questionFormData={questionFormData} setQuestionFormData={setQuestionFormData} q_id={question.q_id} key={question.q_id} deleteQuestion={deleteQuestion} setIsValidQsn={setIsValidQsn}></Mcq>
                            }
                            else if (question.value === 'true-false') {
                                return <True_false index={index + 1} questionFormData={questionFormData} setQuestionFormData={setQuestionFormData} q_id={question.q_id} key={question.q_id} deleteQuestion={deleteQuestion} setIsValidQsn={setIsValidQsn}></True_false>
                            }
                            else if (question.value === 'fill-blanks') {
                                return <Fill_gaps index={index + 1} questionFormData={questionFormData} setQuestionFormData={setQuestionFormData} q_id={question.q_id} key={question.q_id} deleteQuestion={deleteQuestion} setIsValidQsn={setIsValidQsn}></Fill_gaps>
                            }
                        })
                    }
                </div>
            </div>

        </div>
    );
};

export default Form_test;





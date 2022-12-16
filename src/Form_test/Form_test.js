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

    // add question
    const addQuestion = (value) => {
        setQuestionForm((previous) => {
            return [...previous, { q_id: questionForm.length + 1, value: value }]
        })
        console.log(questionForm);
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
        // toast.success('Question created successfully!', {
        //     toastId: 'customId',
        //     position: "top-center",
        //     autoClose: 2000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "dark",
        // });
        Swal.fire({
            title: 'Created exam',
            text:'send the exam link to your student',
            icon: 'success',
            confirmButtonText: 'ok'
        })

        console.log(questionFormData);
        localStorage.setItem('question', JSON.stringify(questionFormData))

    }

    return (
        <div className='m-auto mb-40 c-mt'>
            <div className="container  lg:flex gap-10 m-auto justify-between">
                <div className="h-1/4 flex flex-col sticky top-0 py-5 px-2 shadow-lg rounded-md z-20 bg-white">
                    <div>
                        <button className='m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => { addQuestion('mcq') }}>MCQ</button>
                        <button className='m-2 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded' onClick={() => { addQuestion('true-false') }}>True / False</button>
                        <button className='m-2 bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded' onClick={() => { addQuestion('fill-blanks') }}>Fill Blanks</button>
                    </div>
                    <button className='m-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={() => saveData()}>save question</button>
                </div>
                <div className="bottom flex flex-col lg:w-2/3 gap-20 w-full">
                    {
                        questionForm.map((question, index) => {
                            if (question.value === 'mcq') {
                                return <Mcq index={index + 1} questionFormData={questionFormData} setQuestionFormData={setQuestionFormData} q_id={question.q_id} key={question.q_id} deleteQuestion={deleteQuestion}></Mcq>
                            }
                            else if (question.value === 'true-false') {
                                return <True_false index={index + 1} questionFormData={questionFormData} setQuestionFormData={setQuestionFormData} q_id={question.q_id} key={question.q_id} deleteQuestion={deleteQuestion}></True_false>
                            }
                            else if (question.value === 'fill-blanks') {

                                return <Fill_gaps index={index + 1} questionFormData={questionFormData} setQuestionFormData={setQuestionFormData} q_id={question.q_id} key={question.q_id} deleteQuestion={deleteQuestion}></Fill_gaps>

                            }
                        })

                    }
                </div>
            </div>

        </div>
    );
};

export default Form_test;





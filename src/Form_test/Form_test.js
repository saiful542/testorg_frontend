import React, { useEffect } from 'react';
import { useState } from 'react';
import Fill_Blanks from '../Pages/Questions/Fill_Blanks/Fill_Blanks';
import Mcq from '../Pages/Questions/Mcq/Mcq';
import True_false from '../Pages/Questions/True_false/True_false';

const Form_test = () => {

    const [questionForm, setQuestionForm] = useState([])
    const [questionFormData, setQuestionFormData] = useState([])


    const addQuestion = (value) => {

        if (value === 'mcq') {
            setQuestionForm([...questionForm, <Mcq questionFormData={questionFormData} setQuestionFormData={setQuestionFormData} q_id={questionForm.length + 1}></Mcq>])

        }
        else if (value === 'true-false') {
            setQuestionForm([...questionForm, <True_false questionFormData={questionFormData} setQuestionFormData={setQuestionFormData} q_id={questionForm.length + 1} ></True_false>])
        }
        else if (value === 'fill-blanks') {
            setQuestionForm([...questionForm, <Fill_Blanks questionFormData={questionFormData} setQuestionFormData={setQuestionFormData} q_id={questionForm.length + 1}></Fill_Blanks>])
        }
    }
    const saveData = () => {
        console.log(questionFormData);
    }

    return (
        <div className='m-auto'>
            <div className="container flex m-auto justify-between">
                <div className="left w-full">
                    {
                        questionForm.map((element) => {
                            return element
                        })
                    }
                </div>

                <div className="right w-50 m-4">
                    <button className='m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => (addQuestion('mcq'))}>MCQ</button>
                    <button className='m-2 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded' onClick={() => (addQuestion('true-false'))}>True/False</button>
                    <button className='m-2 bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded' onClick={() => (addQuestion('fill-blanks'))}>Fill Blanks</button>
                    <button className='m-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' onClick={() => (saveData())}>save</button>
                </div>
            </div>

        </div>
    );
};

export default Form_test;
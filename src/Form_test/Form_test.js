import React, { useEffect } from 'react';
import { useState } from 'react';
import Mcq from '../Pages/Questions/Mcq/Mcq';
import True_false from '../Pages/Questions/True_false/True_false';

const Form_test = () => {
    // const [qType, setQtype] = useState()
    const [mcqData, setMcqData] = useState({})
    const [trueFalseData, setTrueFalseData] = useState({})
    const [questionForm, setQuestionForm] = useState([])
    const [questionFormData, setQuestionFormData] = useState([])
    const addQuestion = (value) => {
        if (value == 'mcq') {
            setQuestionForm([...questionForm, <Mcq setMcqData={setMcqData}></Mcq>])
            setQuestionFormData([...questionFormData, mcqData])
        }
        else if (value == 'true-false') {
            setQuestionForm([...questionForm, <True_false setTrueFalseData={setTrueFalseData}></True_false>])
            setQuestionFormData([...questionFormData, trueFalseData])
        }
    }
    const saveData = () => {
        console.log(questionFormData);
    }

    // useEffect(() => {
    //     // if (mcqData) {
    //     //     setQuestionFormData([...questionFormData, mcqData])
    //     // }
    //     // if (trueFalseData) {
    //     //     setQuestionFormData([...questionFormData, trueFalseData])
    //     // }

    // }, [mcqData, trueFalseData])

    return (
        <div>
            <div className="container d-flex">
                <div className="left w-50">
                    {
                        questionForm.map((element) => {
                            return element
                        })

                    }
                </div>

                <div className="right w-50 m-4">
                    <button className='btn-lg btn-warning' onClick={() => (addQuestion('mcq'))}>MCQ</button>
                    <button className='btn-lg btn-warning' onClick={() => (addQuestion('true-false'))}>True/False</button>
                    <button className='btn-lg btn-success' onClick={() => (saveData())}>save</button>
                </div>
            </div>

        </div>
    );
};

export default Form_test;
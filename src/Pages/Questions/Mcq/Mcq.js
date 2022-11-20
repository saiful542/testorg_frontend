
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './Mcq.css'

const Mcq = (props) => {

    const [correctAnswer, setCorrectAnswer] = useState()
    const [optionArray, setOptionArray] = useState([])
    const [options, setOptions] = useState([{ id: 1 }, { id: 2 }])
    const { q_id, setQuestionFormData, questionFormData } = props
    const { register, handleSubmit } = useForm();

    // add option
    const addOption = () => {
        setOptions((previous) => {
            return [...previous, { id: options.length + 1 }]
        })
    }
    // delete option
    const deleteOption = (id) => {
        const filtered_options = options.filter((option) => {
            return option.id !== id;
        })
        let i = 1;
        filtered_options.forEach((option) => {
            option.id = i;
            i++;
        })
        setOptions(filtered_options)
        optionArray.splice((id - 1), 1)
    }

    const onSubmit = (data, event) => {
        // event.preventDefault();
        if (correctAnswer) {
            data.options = optionArray;
            data.correct_answer = optionArray[correctAnswer - 1];
            data.question_type = 'mcq'
            setQuestionFormData([...questionFormData, data])
        }
        else {
            alert('select at-least one option');
        }
    };

    return (
        <div className='m-auto'>
            {/* mcq */}
            <form onSubmit={handleSubmit(onSubmit)} className="w-full rounded-md question-form p-5 my-5" name='mcq'>
                <h2 className="title font-extrabold py-3"><span className=' text-slate-400'>m</span>cq</h2>
                <div className="mcq-question-content container py-1 flex flex-col gap-10">
                    <div className="question-and-marks flex py-2  gap-5 w-full items-center">
                        <span className=' text-3xl'>{`${q_id}.`}</span>
                        <div className="field-with-floating-label w-4/5">
                            <input className='w-full question rounded-md border-0 p-2 py-3 form-check' type="text" placeholder='Question here' {...register('question')} />
                        </div>
                        <div className="field-with-floating-label w-1/5">
                            <input className='marks rounded-md border-0 outline-0 p-2 py-3 w-full' type="number" placeholder='marks here' {...register('marks')} />
                        </div>
                    </div>
                    <div className="radio-options max-w-xl flex flex-col gap-2">
                        {
                            options.map((option) => {
                                return <Option key={option.id} id={option.id} deleteOption={deleteOption} setCorrectAnswer={setCorrectAnswer} optionCount={options.length} optionArray={optionArray} setOptionArray={setOptionArray}></Option>
                            })
                        }
                    </div>
                    <div className='text-start'>
                        <div onClick={() => addOption()} className="inline-block btn bg-green-500 hover:bg-green-700 rounded-md py-3 px-6 mx-20 my-10 add-option">
                            add option +
                        </div>
                    </div>
                </div>
                <input type="submit" className="inline-block text-white btn bg-gray-500 hover:bg-gray-700 rounded-md py-3 px-6 mx-20 my-10" value="done" />
            </form>
        </div>
    );
};

export default Mcq;


// option field
const Option = (props) => {
    const { id, deleteOption, setCorrectAnswer, optionArray, setOptionArray } = props
    const inputValue = (e) => {
        let arr = [...optionArray];
        arr[id - 1] = e
        setOptionArray(arr)
    }

    return (
        <div>
            <div className="option-field">
                <div className="numbering ">
                    <p>{`${id}.`}</p>
                </div>
                <input onInput={(e) => setCorrectAnswer(e.target.value)} type="radio" name="radio" className="radio-field" value={id} />
                <input onInput={(e) => inputValue(e.target.value)} className='text-field ' type="text" placeholder={`option-${id}`} />
                <span onClick={() => deleteOption(id)} className="delete-option" title='delete'>
                    <i class="fas fa-duotone fa-trash text-orange-600"></i>
                </span>
            </div>
        </div>
    )
}
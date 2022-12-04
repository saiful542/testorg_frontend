
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './Mcq.css'

const Mcq = (props) => {
    const [done, setDone] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState()
    const [optionArray, setOptionArray] = useState([])
    const [options, setOptions] = useState([{ id: 1 }, { id: 2 }])
    const { q_id, setQuestionFormData, questionFormData, deleteQuestion, key } = props
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

    const onSubmit = (data) => {
        // event.preventDefault();
        if (correctAnswer) {
            data.options = optionArray;
            data.correct_answer = optionArray[correctAnswer - 1];
            data.question_type = 'mcq'
            data.q_id = q_id;
            setQuestionFormData([...questionFormData, data])
            setDone(true)
        }
        else {
            toast.error('select at-least one option',{
                theme:'colored'
            });
        }
    };
    return (
        <div className='shadow-lg rounded-sm'>
            {/* mcq */}
            <form onSubmit={handleSubmit(onSubmit)} className="w-full rounded-md question-form px-8" name='mcq'>
                <h2 className="title font-extrabold pb-5"><span className=' text-slate-400'>m</span>cq</h2>
                <div className="mcq-question-content container py-1 flex flex-col gap-10 animate__animated animate__slideInRight animate__faster">
                    <div className="question-and-marks flex py-2  gap-5 w-full items-center">
                        <span className=' text-3xl'>{`${q_id}.`}</span>
                        <div className="field-with-floating-label w-4/5">
                            <input className='w-full question rounded-md border-indigo-200 border-2 p-2 py-3 form-check' type="text" placeholder='Question here' {...register('question')} />
                        </div>
                        <div className="field-with-floating-label w-1/5">
                            <input className='marks rounded-md border-indigo-200 border-2 outline-0 p-2 py-3 w-full' type="number" placeholder='marks here' {...register('marks')} />
                        </div>
                    </div>


                    <div className='className=" max-w-full flex  justify-between gap-10'>
                        <div className="left flex flex-col gap-2 radio-options w-1/2">
                            {
                                options.map((option) => {
                                    if (option.id % 2 !== 0) {
                                        return <Option key={option.id} id={option.id} deleteOption={deleteOption} setCorrectAnswer={setCorrectAnswer} optionCount={options.length} optionArray={optionArray} setOptionArray={setOptionArray}></Option>
                                    }
                                })
                            }

                        </div>
                        <div className="right flex flex-col gap-2 radio-options w-1/2">
                            {
                                options.map((option) => {
                                    if (option.id % 2 === 0) {
                                        return <Option key={option.id} id={option.id} deleteOption={deleteOption} setCorrectAnswer={setCorrectAnswer} optionCount={options.length} optionArray={optionArray} setOptionArray={setOptionArray}></Option>
                                    }
                                })
                            }
                        </div>
                    </div>

                    {/* <div className="radio-options max-w-xl flex flex-col gap-2 ">
                        {
                            options.map((option) => {
                                return <Option key={option.id} id={option.id} deleteOption={deleteOption} setCorrectAnswer={setCorrectAnswer} optionCount={options.length} optionArray={optionArray} setOptionArray={setOptionArray}></Option>
                            })
                        }
                    </div> */}
                    {
                        done ? <div></div> : <div className='text-start'>
                            <span onClick={() => addOption()} className="inline-block btn bg-green-500 hover:bg-green-700 rounded-md py-3 px-6 mx-8 add-option cursor-pointer text-white">
                                add option &nbsp;&nbsp; <i class="fas fa-thin fa-square-plus"></i>
                            </span>
                        </div>
                    }
                </div>
                {
                    done ? <span onClick={() => { return  deleteQuestion(q_id) }} className="cursor-pointer inline-block text-white btn bg-red-500 hover:bg-red-700 rounded-md py-3 px-6 mx-20 my-10">delete</span> : <input type="submit" className="cursor-pointer inline-block text-white btn bg-gray-500 hover:bg-gray-700 rounded-md py-3 px-6 mx-20 my-10" value="done" />
                }

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
            <div className="option-field w-full">
                <div className="numbering">
                    <p>{`${id}.`}</p>
                </div>
                <input onInput={(e) => setCorrectAnswer(e.target.value)} type="radio" name="radio" className="radio-field" value={id} />
                <input onInput={(e) => inputValue(e.target.value)} className='text-field animate__animated animate__slideInRight animate__faster rounded-md border-indigo-200 border-2  ' type="text" placeholder={`option ${id}`} />
                <span onClick={() => deleteOption(id)} className="delete-option" title='delete'>
                    <i class="fas fa-solid fa-trash-can text-orange-600"></i>
                </span>
            </div>
        </div>
    )
}
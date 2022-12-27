
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
    const { q_id, setQuestionFormData, questionFormData, deleteQuestion, index, setIsValidQsn, totalMarks, setTotalMarks } = props
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

        setOptions(filtered_options)
        optionArray.splice((id - 1), 1)
    }

    const onSubmit = (data) => {
        const test = () => {
            for (let option of optionArray) {
                if (!option) {
                    return false;
                }
                else
                    return true;
            }
        }
        if (test() && (data.question) && (data.marks)) {
            if (correctAnswer) {
                data.options = optionArray;
                data.correct_answer = optionArray[correctAnswer - 1];
                data.question_type = 'mcq'
                data.q_id = q_id;
                setQuestionFormData([...questionFormData, data])
                setDone(true)
                setIsValidQsn(true)
                setTotalMarks(totalMarks + parseInt(data.marks))
            }
            else {
                toast.error('select at-least one option', {
                    toastId: 'customId',
                    theme: 'colored'
                });
            }
        }
        else {
            toast.error('fill up the empty fields', {
                autoClose: 2000,
                toastId: 'customId',
                theme: 'colored'
            });

        }

    };
    return (
        <div className='shadow-lg rounded-md border-t-8 border-t-cyan-600 text-slate-500 bg-white pt-5'>
            {/* mcq */}
            <form onSubmit={handleSubmit(onSubmit)} className="w-full rounded-md question-form px-8" name='mcq'>
                <h2 className="title font-extrabold pb-5"><span className=' text-slate-500'>m</span>cq</h2>
                <div className="mcq-question-content container py-1 flex flex-col gap-10 animate__animated animate__slideInRight animate__faster">
                    <div className="question-and-marks flex py-2  gap-5 w-full items-center">
                        <span className=' text-3xl'>{`${index}.`}</span>
                        <div className="field-with-floating-label w-4/5">
                            <input className='w-full question rounded-md border-cyan-600 p-2 py-3 form-check' type="text" placeholder='Question here' {...register('question')} />
                        </div>
                        <div className="field-with-floating-label w-1/5">
                            <input className='marks rounded-md border-cyan-600 outline-0 p-2 py-3 w-full' type="number" placeholder='marks here' {...register('marks')} />
                        </div>
                    </div>

                    <div className="left flex flex-col gap-2 radio-options lg:w-1/2 ">
                        {
                            options.map((option, index) => {
                                return <Option options={options} index={index + 1} id={option.id} deleteOption={deleteOption} setCorrectAnswer={setCorrectAnswer} optionCount={options.length} optionArray={optionArray} setOptionArray={setOptionArray} done={done}></Option>
                            })
                        }

                    </div>
                    {
                        done ? <div></div> : <div className='text-start'>
                            <span onClick={() => addOption()} className=" btnborder-none hover:opacity-80 hover:text-black bg-gradient-to-tr from-indigo-800 to-cyan-600 rounded-md py-3 px-6 mx-8 add-option cursor-pointer text-white text-center">
                                add option &nbsp;&nbsp; <i class="fas fa-thin fa-square-plus"></i>
                            </span>
                        </div>
                    }
                </div>
                {
                    done ? <span onClick={() => { return deleteQuestion(q_id) }} className="cursor-pointer inline-flex text-white btn bg-red-700 hover:bg-red-800 rounded-md py-3 px-6 mx-20 my-10">delete</span> : <input type="submit" className="cursor-pointer inline-block text-white btn bg-gray-500 hover:bg-gray-700 rounded-md py-3 px-6 mx-20 my-10" value="done" />
                }

            </form>
        </div>
    );
};

export default Mcq;


// option field
const Option = (props) => {
    const { id, deleteOption, setCorrectAnswer, optionArray, setOptionArray, index, done, options } = props
    const inputValue = (e) => {
        let arr = [...optionArray];
        arr[id - 1] = e
        setOptionArray(arr)
    }
    return (
        <div>
            <div className="option-field w-full">
                {/* <div className="numbering">
                    <p>{`${index}.`}</p>
                </div> */}
                <input onInput={(e) => setCorrectAnswer(e.target.value)} type="radio" name="radio" className="radio-field radio border-2 border-cyan-600 radio-accent" value={id} />
                <input onInput={(e) => inputValue(e.target.value)} className='text-field animate__animated animate__slideInRight animate__faster rounded-md border-cyan-600  border-2' type="text" placeholder={`option ${index}`} />
                {
                    (done || options.length <= 2) ? <div></div> : <span onClick={() => deleteOption(id)} className="delete-option" title='delete'>
                        <i class="fas fa-solid fa-trash-can text-orange-600"></i>
                    </span>
                }
            </div>
        </div>
    )
}
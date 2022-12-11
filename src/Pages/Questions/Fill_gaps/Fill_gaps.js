import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useLogin from '../../../Hooks/useLogin';

const Fill_gaps = (props) => {
    const [done, setDone] = useState(false)
    const { q_id, setQuestionFormData, questionFormData, deleteQuestion, key, index } = props
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        if (data.correct_answer) {
            data.question_type = 'fill-blanks'
            data.q_id = q_id;
            // console.log(data);
            setQuestionFormData([...questionFormData, data])
            setDone(true)
        }
        else {
            toast.error('select at-least one option', {
                toastId: 'customId',
                theme: 'colored'
            });
        }
    }
    return (
        <div className='shadow-lg rounded-sm'>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full rounded-md question-form px-8" name='fill-blanks'>
                <h2 className="title font-extrabold pb-5"><span className=' text-slate-400'>fill </span>blanks</h2>
                <div className="mcq-question-content container py-1 flex flex-col gap-10">
                    <div className="question-and-marks flex py-2  gap-5 w-full items-center">
                        <span className=' text-3xl'>{`${index}.`}</span>
                        <div className="field-with-floating-label w-4/5">
                            <input className='w-full question rounded-md border-indigo-200 border-2 p-2 py-3 form-check' type="text" placeholder='Question here' {...register('question')} />
                        </div>
                        <div className="field-with-floating-label w-1/5">
                            <input className='marks rounded-md border-indigo-200 border-2 outline-0 p-2 py-3 w-full' type="number" placeholder='marks here' {...register('marks')} />
                        </div>
                    </div>
                    <div className="radio-options max-w-xl flex flex-col gap-2">
                        <div className="option-field">
                            <div className="numbering ">
                                <p>1.</p>
                            </div>
                            <input className='text-field text-xl rounded-md border-indigo-200 border-2' type="text" placeholder='answer' {...register('correct_answer')} />
                        </div>
                    </div>
                </div>
                {
                    done ? <span onClick={() => { deleteQuestion(q_id) }} className="cursor-pointer inline-flex text-white btn bg-red-500 hover:bg-red-700 rounded-md py-3 px-6 mx-20 my-10">delete</span> : <input type="submit" className="cursor-pointer inline-block text-white btn bg-gray-500 hover:bg-gray-700 rounded-md py-3 px-6 mx-20 my-10" value="done" />
                }
            </form>
        </div>
    );
};

export default Fill_gaps;
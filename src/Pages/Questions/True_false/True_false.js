import React from 'react';
import { set, useForm } from 'react-hook-form';

const True_false = (props) => {
    const { q_id, setQuestionFormData, questionFormData } = props
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {

        if (data.correct_answer) {
            data.options = ['true', 'false']
            data.question_type = 'true-false'
            console.log(data);
            setQuestionFormData([...questionFormData, data])
        }
        else {
            alert('select at-least one option');
        }
    };
    return (
        <div>
            {/* true-false */}
            <form onSubmit={handleSubmit(onSubmit)} className="w-full rounded-md question-form p-5 my-5" name='true-false'>
                <h2 className="title font-extrabold py-3"><span className=' text-slate-400'>true</span>false</h2>
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
                        <div className="option-field">
                            <div className="numbering ">
                                <p>1.</p>
                            </div>
                            <input type="radio" name="radio" className="radio-field" value={'true'}  {...register('correct_answer')} />
                            <input className='text-field text-2xl bg-transparent' type="text" value={'True'} disabled />
                        </div>
                        <div className="option-field">
                            <div className="numbering ">
                                <p>2.</p>
                            </div>
                            <input type="radio" name="radio" className="radio-field" value='false'  {...register('correct_answer')} />
                            <input className='text-field text-2xl bg-transparent' type="text" value={'False'} disabled />
                        </div>
                    </div>

                </div>
                <input type="submit" className="btn btn-success my-4" value="done" />
            </form>
        </div>

    );
};

export default True_false;
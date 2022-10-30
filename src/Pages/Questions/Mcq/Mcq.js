import React, { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './Mcq.css'

const Mcq = () => {

    const [radioValue, setRadioValue] = useState('')
    const { register, handleSubmit } = useForm();

    // radio value
    useEffect(() => {
        const topParent = document.querySelector('.full-question-content')
        const radio_options = document.querySelector('.radio-options')
        // item no
        let option_no = radio_options.querySelectorAll('.option-field').length
        // item no

        passValues(topParent, radio_options, option_no);

    }, [radioValue])


    const passValues = (topParent, radio_options, option_no) => {
        topParent.addEventListener('click', (e) => {

            //take radio value
            if (e.target.type === "radio") {
                setRadioValue(e.target.nextElementSibling.value)
            }
            //add option
            if (Array.from(e.target.classList).includes('add-option')) {
                option_no++;
                e.preventDefault();
                const radio_input = document.createElement('input')
                radio_input.type = 'radio'
                radio_input.name = 'radio'
                radio_input.classList.add('radio-field')
                const text_input = document.createElement('input')
                text_input.type = 'text'
                text_input.classList.add('text-field')
                text_input.placeholder = `option ${option_no}`
                radio_input.classList.add('radio-field')
                const option_field = document.createElement('div')
                option_field.classList.add('option-field')
                const option_no_wrapper = document.createElement('div')
                option_no_wrapper.classList.add('numbering')
                const p_tag = document.createElement('p')
                p_tag.textContent = option_no
                const delete_wrapper = document.createElement('span')
                delete_wrapper.textContent = 'x'
                delete_wrapper.classList.add('delete-option')
                option_no_wrapper.appendChild(p_tag)
                option_field.appendChild(option_no_wrapper)
                option_field.appendChild(radio_input)
                option_field.appendChild(text_input)
                option_field.appendChild(delete_wrapper)
                radio_options.appendChild(option_field)
            }
            // delete option
            if (e.target.className === 'delete-option') {
                radio_options.removeChild(e.target.parentElement)
                option_no--;
            }
        })

    }


    const onSubmit = data => {
        data.q_type = 'mcq'
        data.correct_answer = radioValue
        console.log(data)
    };
    return (
        <div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)} className="w-100 rounded-3 question-form p-2">
                    <h2 className="title fw-bolder py-3"><span className='text-danger'>m</span>cq</h2>
                    <div className="full-question-content container py-1 d-flex flex-column gap-4">
                        <div className="question-and-marks d-flex py-2  gap-5 w-100">
                            <div className="field-with-floating-label w-100">
                                <input className='question w-100 rounded-3 border-0 p-2 py-3 form-check' type="text" placeholder='Question here' {...register('question')} />
                            </div>
                            <div className="field-with-floating-label w-25">
                                <input className='marks w-100 rounded-3 border-0 outline-0 p-2 py-3' type="number" placeholder='marks here' {...register('marks')} />
                            </div>

                        </div>
                        <div className="radio-options w-100 d-flex flex-column gap-2">
                            <div className="option-field">
                                <div className="numbering ">
                                    <p>1.</p>
                                </div>
                                <input type="radio" name="radio" className="radio-field" />
                                <input className='text-field ' type="text" placeholder="option 1" />
                                <span className="delete-option">
                                    x
                                </span>
                            </div>
                            <div className="option-field">
                                <div className="numbering ">
                                    <p>2.</p>
                                </div>
                                <input type="radio" name="radio" className="radio-field " />
                                <input className='text-field ' type="text" placeholder="option 2" />
                                <span className="delete-option">
                                    x
                                </span>
                            </div>
                            <div className="option-field">
                                <div className="numbering ">
                                    <p>3.</p>
                                </div>
                                <input type="radio" name="radio" className="radio-field " />
                                <input className='text-field ' type="text" placeholder="option 3" />
                                <span className="delete-option">
                                    x
                                </span>
                            </div>
                            <div className="option-field">
                                <div className="numbering ">
                                    <p>4.</p>
                                </div>
                                <input type="radio" name="radio" className="radio-field " />
                                <input className='text-field ' type="text" placeholder="option 4" />
                                <span className="delete-option">
                                    x
                                </span>
                            </div>
                        </div>
                        <div className='text-start'>
                            <button className="btn btn-outline-primary px-5 ms-5 add-option">
                                add option +
                            </button>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-success my-4" value="done" />
                </form>

            </div>

        </div>
    );
};

export default Mcq;
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './Mcq.css'

const Mcq = (props) => {
    console.log('mcq called');
    const { setMcqData } = props
    const [radioValue, setRadioValue] = useState('')
    const [mcqOptionValue, setMcqOPtionValue] = useState([])
    const [isRadio, setIsRadio] = useState(false)

    const { register, handleSubmit } = useForm();
    const p = true;
    const topParent = document.querySelector('.left')
    // passQuizValues(topParent);

    topParent.addEventListener('click', (e) => {
        const allOptionsValue = (items, value) => {
            let optionValues = []
            if (value) {
                items.forEach(item => {
                    optionValues.push(item.querySelector('.text-field').value)
                })
                setMcqOPtionValue([...optionValues])
            }
            else {
                for (let i = 1; i < items.length; i++) {
                    optionValues.push(items[i].querySelector('.text-field').value)
                }
            }
        }
        const optionCounter = (items, value) => {
            if (value) {
                let count = 1;
                items.forEach(item => {
                    item.firstElementChild.firstElementChild.innerText = `${count}.`
                    item.lastElementChild.previousElementSibling.placeholder = `option ${count}`
                    count++;
                })
            }
            else {
                for (let i = 1; i < items.length; i++) {
                    console.log(i);
                    items[i].firstElementChild.firstElementChild.innerText = `${i}.`
                    items[i].lastElementChild.previousElementSibling.placeholder = `option ${i}`
                }
            }
        }
        if (e.target.type === "text") {
            e.target.addEventListener('input', (e) => {
                let items = e.target.parentElement.parentElement.querySelectorAll('.option-field')
                allOptionsValue(items, 1)
            })

        }

        //take radio value
        if (e.target.type === "radio" && e.target.checked) {
            setRadioValue(e.target.nextElementSibling.value)
            setIsRadio(true)
            console.log('checked');
            e.target.nextElementSibling.addEventListener('input', (e) => {
                setRadioValue(e.target.value)
                let itemss = e.target.parentElement.parentElement.querySelectorAll('.option-field')
                allOptionsValue(itemss, 1)
            })
            let itemss = e.target.parentElement.parentElement.querySelectorAll('.option-field')
            allOptionsValue(itemss, 1)
        }
        //add option
        // if (Array.from(e.target.classList).includes('add-option')) {
        //     e.preventDefault();
        //     const radio_input = document.createElement('input')
        //     radio_input.type = 'radio'
        //     radio_input.name = 'radio'
        //     radio_input.classList.add('radio-field')
        //     const text_input = document.createElement('input')
        //     text_input.type = 'text'
        //     text_input.classList.add('text-field')
        //     radio_input.classList.add('radio-field')
        //     const option_field = document.createElement('div')
        //     option_field.classList.add('option-field')
        //     const option_no_wrapper = document.createElement('div')
        //     option_no_wrapper.classList.add('numbering')
        //     const p_tag = document.createElement('p')
        //     const delete_wrapper = document.createElement('span')
        //     delete_wrapper.textContent = 'x'
        //     delete_wrapper.classList.add('delete-option')
        //     option_no_wrapper.appendChild(p_tag)
        //     option_field.appendChild(option_no_wrapper)
        //     option_field.appendChild(radio_input)
        //     option_field.appendChild(text_input)
        //     option_field.appendChild(delete_wrapper)
        //     e.target.parentElement.previousElementSibling.appendChild(option_field)
        //     let items = e.target.parentElement.previousElementSibling.querySelectorAll('.option-field')
        //     optionCounter(items, 1)
        //     allOptionsValue(items, 1)

        // }
        // delete option
        if (e.target.className === 'delete-option') {
            let items = e.target.parentElement.parentElement.querySelectorAll('.option-field')
            optionCounter(items, 0)
            allOptionsValue(items, 0)
            e.target.parentElement.parentElement.removeChild(e.target.parentElement)
        }
    })

    // radio value
    // useEffect(() => {
    //     // console.log('mcq useEffect called');
    //     // const topParent = document.querySelector('.left')
    //     // passQuizValues(topParent);

    // }, [p])






    const onSubmit = (data, e) => {
        if (isRadio) {
            data.options = mcqOptionValue
            data.question_type = 'mcq'
            data.correct_answer = radioValue
            console.log(data);
            setMcqData(data)
        }
        else {
            alert('select at-least one option');
        }
    };
    return (
        <div>
            {/* mcq */}
            <form onSubmit={handleSubmit(onSubmit)} className="w-100 rounded-3 question-form p-2 my-5" name='mcq'>
                <h2 className="title fw-bolder py-3"><span className='text-danger'>m</span>cq</h2>
                <div className="mcq-question-content container py-1 d-flex flex-column gap-4">
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
    );
};

export default Mcq;
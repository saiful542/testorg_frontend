import React from 'react';
import { set } from 'react-hook-form';

const True_false = (props) => {
    const { setTrueFalseData } = props
    setTrueFalseData('i am true false')
    return (
        <div>
                    {/* true-false */}
                    <form className="w-100 rounded-3 question-form p-2" name='true-false'>
                        <h2 className="title fw-bolder py-3"><span className='text-danger'>true</span>false</h2>
                        <div className="mcq-question-content container py-1 d-flex flex-column gap-4">
                            <div className="question-and-marks d-flex py-2  gap-5 w-100">
                                <div className="field-with-floating-label w-100">
                                    {/* <input className='question w-100 rounded-3 border-0 p-2 py-3 form-check' type="text" placeholder='Question here' {...register('question')} /> */}
                                </div>
                                <div className="field-with-floating-label w-25">
                                    {/* <input className='marks w-100 rounded-3 border-0 outline-0 p-2 py-3' type="number" placeholder='marks here' {...register('marks')} /> */}
                                </div>

                            </div>
                            {/* <div className="radio-options w-100 d-flex flex-column gap-2">
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
                            </div> */}
                            <div className='text-start'>
                                <button className="btn btn-outline-primary px-5 ms-5 add-option">
                                    add option +
                                </button>
                            </div>
                        </div>
                        <input type="submit" />
                    </form>

                </div>

    );
};

export default True_false;
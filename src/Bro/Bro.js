import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Bro = () => {
    const [isTeacher, setisTeacher] = useState();
    const { register, handleSubmit, reset, getValues } = useForm();
    const onSubmit = data => {
        // alert(JSON.stringify(data));
        console.log(data)
        reset();
    };

    const radio_checked = () => {
        const radio_button = document.querySelector('.radio-group input[type=`radio`]');
        console.log(radio_button);
        // if (radio_button.checked) {
        //     radio_button.classList.add('active')
        // }
        // radio_button.classList.add('active')
        // const input = document.querySelector('.radio + .radio-input')
        // if (radio_button.checked) {
        //     console.log(radio_button);
        // }

    }

    return (
        <div>

            <div className="container align-items-center d-flex flex-column">
                <h1>radio test</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="form bg-info w-100 p-5 rounded-3">
                    <div className="question q-type-quiz">

                    </div>
                    <div className="radio-group m-1 d-flex gap-3 input-group">
                        <input onChange={() => radio_checked()} type="radio" name="" id="" className='radio' />
                        <input type="text" className='form-control radio-input' defaultValue={1} {...register('answer')} />
                    </div>
                    <div className="radio-group m-1 d-flex gap-3 input-group">
                        <input onChange={() => radio_checked()} type="radio" name="" id="" className='radio' />
                        <input type="text" className='form-control radio-input' defaultValue={2} {...register('answer')} />
                    </div>
                    <div className="radio-group m-1 d-flex gap-3 input-group">
                        <input onChange={() => radio_checked()} type="radio" name="" id="" className='radio' />
                        <input type="text" className='form-control radio-input' defaultValue={3} {...register('answer')} />
                    </div>
                    <div className="radio-group m-1 d-flex gap-3 input-group">
                        <input onChange={() => radio_checked()} type="radio" name="" id="" className='radio' />
                        <input type="text" className='form-control radio-input' defaultValue={4} {...register('answer')} />
                    </div>
                    <div>
                        <input type="submit" className="btnn" />
                    </div>

                </form>
            </div>

        </div>
    );
};

export default Bro;
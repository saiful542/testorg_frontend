import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const useLogin = () => {
    const [validUser, setValidUser] = useState()

    async function sendData(data) {

        if (data) {
            console.log('data found', data.method);

            await axios.post(`https://testorg-backend.onrender.com/${data.method}`, data)
                .then(response => {
                    setValidUser({
                        userName:response.data.name,
                        userMail:response.data.email,
                    });
                    toast.success(`Hello ${response.data.name}`, {
                        theme: 'colored'
                    })

                })
                .catch(err => {
                    toast.error(err.response.data.error, {
                        theme: 'colored'
                    })
                });

            // const response = await fetch(`https://testorg-backend.onrender.com/${data.method}`, {
            //     method: "POST",
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(data),
            // })
            // const show_user = await response.json()
            // console.log(show_user)

        }
        else
            toast.error('something went wrong!! try again', {
                theme: 'colored'
            });
    }

    return {
        sendData,
        validUser
    };

};

export default useLogin;
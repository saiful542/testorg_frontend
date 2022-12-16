import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const useLogin = () => {
    const [validUser, setValidUser] = useState({})
    async function sendData(data) {
        if (data) {
            // console.log('data found', data.method);
            if (data.method === 'login') {
                await axios.post(`https://testorg-backend.onrender.com/${data.method}`, data, {
                    withCredentials: true,
                    headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
                    credentials: 'include'
                })
                    .then(response => {
                        // console.log(response);
                        setValidUser({
                            userName: response.data.name,
                            userMail: response.data.email,
                        })
                        localStorage.setItem('user', JSON.stringify({
                            userName: response.data.name,
                            userMail: response.data.email,
                        }))

                        toast.success(`Hello ${response.data.name}`, {
                            autoClose: 2000,
                            toastId: 'customId',
                            position: 'top-right',
                            theme: 'colored'
                        })

                    })
                    .catch(err => {
                        toast.error(err.response.data.error, {
                            autoClose: 2000,
                            toastId: 'customId',
                            position: 'top-right',
                            theme: 'colored'
                        })
                    })

            }
            else if (data.method === 'signup') {
                await axios.post(`https://testorg-backend.onrender.com/${data.method}`, data)
                    .then(response => {
                        console.log(response.data.msg);
                        toast.success(response.data.msg, {
                            autoClose: 2000,
                            toastId: 'customId',
                            position: 'top-left',
                            theme: 'colored'
                        })

                    })
                    .catch(err => {
                        toast.error(err.response.data.error, {
                            autoClose: 2000,
                            toastId: 'customId',
                            position: 'top-left',
                            theme: 'colored'
                        })
                    });

            }

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
                autoClose: 2000,
                theme: 'colored'
            });
    }
    useEffect(() => {
        if (localStorage.getItem('user')) {
            setValidUser({
                userName: JSON.parse(localStorage.getItem('user')).userName,
                userMail: JSON.parse(localStorage.getItem('user')).userMail
            })
        }
    }, [])
    async function logout() {
        await axios.get(`https://testorg-backend.onrender.com/logout`)
            .then(response => {
                console.log(response);
                localStorage.clear()
                toast.warning('logged out',{
                    autoClose: 2000,
                    toastId: 'customId',

                })
            })
            .catch(err => {
                toast.error(err.response.data.error, {
                    toastId: 'customId',
                    position: 'top-right',
                    theme: 'colored'
                })
            });
        setValidUser({})
        localStorage.clear()
    }



    return {
        sendData,
        validUser,
        logout
    };

};

export default useLogin;
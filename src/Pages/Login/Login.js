// import { data } from 'autoprefixer';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import "./Login.scss"
const Login = () => {
    const [isSignIn, setisSignIn] = useState(true);
    const [signinData, setSigninData] = useState();
    // const [signupData, setSignupData] = useState();
    const { register, handleSubmit, reset } = useForm();

    // signup submit
    const onSubmit = (submitted_data, e) => {
        const loginEmailValue = document.querySelector('.login-email').value
        const loginPasswordValue = document.querySelector('.login-password').value
        const signupEmailValue = document.querySelector('.signup-email').value
        const signupPasswordValue = document.querySelector('.signup-password').value
        const signupUsernameValue = document.querySelector('.signup-username').value
        let user;



        async function sendData(data) {

            if (data) {
                console.log('data found', data.method);
                const response = await fetch(`https://testorg-backend.onrender.com/${data.method}`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                const show_user = await response.json()
                console.log(show_user)


            }
            else
                console.log('data not found')

        }
        if (e.target.name == 'login') {
            if (!loginEmailValue || !loginPasswordValue) {
                alert('please, fill - up')
            }
            else {
                user = {
                    method: 'login',
                    email: submitted_data.loginEmail,
                    password: submitted_data.loginPassword

                }
                sendData(user)
                reset();
            }

        }


        else if (e.target.name == 'signup') {
            if (!signupEmailValue || !signupPasswordValue || !signupUsernameValue) {
                alert('please, fill - up')
            }
            else {
                console.log('user created');
                user = {
                    method: 'signup',
                    email: submitted_data.email,
                    password: submitted_data.password,
                    usertype: submitted_data.profession,
                    username: submitted_data.username
                }
                sendData(user)
                reset();
            }
        }
    };


    return (
        <div className=''>
            <div className={isSignIn ? 'containerr mb-0' : 'containerr sign-up-mode mb-0'}>
                <div className="forms-container">
                    <div className="signin-signup">
                        <form onSubmit={handleSubmit(onSubmit)} name='login' className="sign-in-form" id='sign-in-form'>
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="email" placeholder="Email" {...register('loginEmail')} className="login-email" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" {...register('loginPassword')} className='login-password' />
                            </div>
                            <input name='signin' type="submit" value="Login" className="btnn solid text-center" />
                            <p className="social-text">Or Sign in with social platforms</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </form>
                        <form name='signup' onSubmit={handleSubmit(onSubmit)} className="sign-up-form" id='sign-up-form'>
                            <h2 className="title">Sign up</h2>
                            <div className="input-field d-flex text-center justify-content-between">
                                <span className='w-100 d-flex justify-content-between text-center cs  '><i className="fas fa-chalkboard-user ci"></i>
                                    <h6 className='  text-nowrap'>sign up as</h6></span>
                                <span className='text-center'>
                                    <select {...register("profession")} >
                                        <option value="teacher">Teacher</option>
                                        <option value="student">Student</option>
                                    </select>
                                </span>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username" {...register('username')} className="signup-username" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="email" placeholder="Email" {...register('email')} className="signup-email" />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" {...register('password')} className="signup-password" />
                            </div>
                            <input name='signup' type="submit" className="btnn" value="Sign up" />
                            <p className="social-text">Or Sign up with social platforms</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </form>

                    </div>
                </div>

                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New here ?</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>
                            <button onClick={() => setisSignIn(false)} className="btnn transparent" id="sign-up-btn">
                                Sign up
                            </button>
                        </div>
                        <img src="../files/login.svg" className="image" alt="" />
                    </div>
                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us ?</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                laboriosam ad deleniti.
                            </p>
                            <button onClick={() => setisSignIn(true)} className="btnn transparent" id="sign-in-btn">
                                Sign in
                            </button>
                        </div>
                        <img src="../files/signup.svg" className="image" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;


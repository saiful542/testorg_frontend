import React from 'react';
import './Header.scss'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Swal from 'sweetalert2';


const Header = () => {
    const { validUser, logout } = useAuth()
    const navigate = useNavigate()
    const toSignIn = () => {
        navigate("/Login", { state: { value: true } })
    }

    return (
        <div className='z-50 nb-custom w-full bg-gradient-to-r from-indigo-800 via-cyan-500 to-indigo-800 fixed top-0'>
            <div className="navbar container m-auto w-full inset-x-0  nb-custom px-0">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/FindRoom'} className='text-white'>Find Room</Link></li>
                        <li><Link to={'/Exam'} className='text-white'>Exam</Link></li>
                        {
                            validUser?.userName ? <li><p className='text-white'>{validUser?.userName}</p></li> : <li><div className='text-white' onClick={() => { toSignIn() }}>Login</div></li>
                        }
                    </ul>
                </div>
                <div className="flex-1 sm:navbar-center">
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl lg:text-3xl text-transparent stroke-slate-100 nav-text">
                        TestOrg
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <li><Link className='text-white'>Dashboard</Link></li>
                        <li><Link to={'/Room'} className='text-white'>Create Exam</Link></li>
                        <li><Link to={'/Exam'} className='text-white'>Exam</Link></li>
                        {
                            validUser?.userName ? <li><p className='text-white'>{validUser?.userName}</p></li> : <li><div className='text-white' onClick={() => { toSignIn() }}>Login</div></li>
                        }
                    </ul>
                </div>

                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            {
                                validUser?.userName ? <div className="w-10 rounded-full ">
                                    <img src="../files/user.png" />
                                </div> : <div className="w-10 rounded-full " onClick={() => Swal.fire('Please Login First')}>
                                    <img src="../files/user.png" />
                                </div>
                            }
                        </label>
                        {
                            validUser?.userName && <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to={'/MyProfile'} className="justify-between text-white">
                                        Profile
                                    </Link>
                                </li>
                                <li><Link to={'/Join_Room'} className='text-white'>Join Room</Link></li>
                                <li><Link to={'/MyRooms'} className='text-white'>My Rooms</Link></li>
                                {
                                    validUser?.userName && <li><p className='text-white' onClick={() => { logout(); navigate('/Home') }}>Logout</p></li>
                                }
                            </ul>


                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
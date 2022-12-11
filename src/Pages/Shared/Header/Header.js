import React from 'react';
import './Header.scss'
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Header = () => {
    const { validUser, logout } = useAuth()

    // const { user, LogOut, GoogleSignIn } = useFirebase()
    // const history = useHistory()
    // const glogin = () => {
    //     GoogleSignIn(history, user)

    // }
    console.log(localStorage.user);

    return (
        // <div>
        //     <nav className="navbar  navbar-expand-lg  navbar-dark nav-bg  animate__animated animate__fadeIn shadow-lg  " >
        //         <div className="container-fluid">
        //             <Link className="p-1 links" to="/Home"><h2><i class="fa fa-cubes"></i><span className="fw-bolder ms-2 " >TestOrg</span></h2></Link>
        //             <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"><i className="fas fa-bars" style={{ color: "#fff", fontSize: "28px" }}></i></span>
        //             </button>
        //             <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
        //                 <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        //                     <li className="nav-item">
        //                         <NavLink className="links" to="/Home" ><span className="fw-bolder">Home</span></NavLink>
        //                     </li>
        //                     <li className="nav-item">
        //                         <NavLink className="links" to='/About'><span className="fw-bolder">About </span></NavLink></li>
        //                 </ul>
        //                 {
        //                     user.email?<NavLink className="links" to="/Dashboard"><span className="fw-bolder">Dashboard</span></NavLink>:<p></p>

        //                 }
        //                 {
        //                     !user.email ? <NavLink className="links" to="/Login"><button    className="btn bt">Login</button></NavLink>
        //                         : <button onClick={()=>LogOut(history)} className="btn btn-danger me-3">Logout</button>

        //                 }
        //                 {    
        //                     user.photoURL ? <img className="mx-3" style={{ width: "50px", height: '50px', borderRadius: "50px 50px" ,border:"1px solid white" }} src={user.photoURL} alt="" />
        //                         : <img className="mx-3" style={{ width: "50px", height: '50px', borderRadius: "50px 50px",border:"1px solid white"  }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRerBR3bfynBVdF2gjoii3i_8yI4KOdK5_cxw&usqp=CAU" alt="" />
        //                 }
        //                 <h3>{user.displayName}</h3>
        //             </div>
        //         </div>
        //     </nav>
        // </div>
        <div className='bg-base-100 w-full'>
            <div className="navbar bg-base-100 container m-auto w-full inset-x-0 z-40">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link>Item 1</Link></li>

                        <li><Link to={'/Login'}>Login</Link></li>
                    </ul>
                </div>
                <div className="flex-1 sm:navbar-center">
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl text-white">TestOrg</Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={'/Exam'}>Exam</Link></li>
                        {
                            validUser.userName ? <li><p>{validUser.userName}</p></li> : <li><Link to={'/Login'}>Login</Link></li>
                        }
                    </ul>
                </div>

                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link className="justify-between">
                                    Profile
                                </Link>
                            </li>
                            <li><Link>Dashboard</Link></li>
                            {
                                validUser.userName ? <li><p onClick={() => { logout() }}>Logout</p></li> : <li>none</li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
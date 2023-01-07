import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import useAuth from '../../Hooks/useAuth';
import Loader from '../../Loader/Loader';

const MyRooms = () => {
    const { validUser } = useAuth()
    const [rooms, setRooms] = useState(null)
    // setRooms(roomData.myRooms)
    // Swal.fire({
    //     title: 'Getting rooms!',
    //     timer: 2000,
    //     timerProgressBar: true,
    //     didOpen: () => {
    //         Swal.showLoading()
    //     },

    // }).then(() => {
    //     // setRooms([{ roomId: '4sd7e321asf4as' }])
    // })
    // console.log(validUser.token)
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2E0NTg1MzFhMDM4YjgwM2I0M2RmYmYiLCJpYXQiOjE2NzMwNzQwOTMsImV4cCI6MTY3MzMzMzI5M30.h4ntnrBzoWUCNYZ_oGYI98Ap8DLFEKh2LCII8mVsMQI`
    const fetchRooms = async () => {
        await axios.post(`https://excited-foal-raincoat.cyclic.app/room/my-room`, { token: token })
            .then(response => {
                setRooms(response.data[0].myRooms)
            })
            .catch(err => {
                toast.error(err.response.data, {
                    toastId: 'customId',
                    position: 'top-right',
                    theme: 'colored',
                    autoClose: 2000,
                })
            });
    }
    fetchRooms()

    const getStatus = (room) => {
        let startTime = new Date(`${room.startTime}`).getTime();
        let endTime = new Date(`${room.endTime}`).getTime();
        let currentTime = new Date().getTime();
        {
            if (startTime > currentTime) {
                let obj = {
                    status: `Exam will start at ${new Date(room.startTime).toLocaleTimeString()}`,
                    color: `accent`
                }
                return obj

            }
            else if (currentTime >= startTime && currentTime < endTime) {
                let obj = {
                    status: `running`,
                    color: `success`
                }
                return obj

            }
            else {
                let obj = {
                    status: `ended`,
                    color: `natural`
                }
                return obj
            }

        }

    }
    return (
        <div className='c-mt container m-auto min-h-screen pt-10 pb-20'>
            <div className='m-auto w-full text-center' >

                {
                    rooms ? <div >
                        <h1 className='text-start font-bold text-5xl pb-20 animate__animated animate__slideInRight pl-16'>My rooms</h1>
                        <div className='flex flex-wrap gap-y-10'>
                            {
                                rooms && rooms.map(room => {
                                    return (
                                        <div key={room.roomID} className='animate__animated animate__slideInRight m-auto'>
                                            <div className="card w-96 shadow-2xl" data-theme="halloween">
                                                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                                <div className="card-body">
                                                    <h2 className="card-title text-gray-400">
                                                        {room.CourseName}
                                                        <div className={`badge-outline badge badge-${getStatus(room).color} text-gray-700 float-right` }>{getStatus(room).status}</div>
                                                    </h2>
                                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                                    <div className="card-actions justify-start">
                                                        <div className="badge badge-outline">{new Date(`${room.startTime}`).toDateString()}</div>
                                                        <div className="badge badge-outline">{new Date(`${room.startTime}`).toLocaleTimeString()}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div> : <div className='pt-56 m-auto flex flex-col items-center justify-center gap-10'><Loader /> <h1>Getting Room Data ...</h1></div>
                }
            </div>
        </div>
    );
}

export default MyRooms;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import useAuth from '../../Hooks/useAuth';
import Loader from '../../Loader/Loader';
import SingleRoom from '../SingleRoom/SingleRoom';

const MyRooms = () => {
    const { counter, setCounter } = useState()
    const { validUser } = useAuth()
    const [rooms, setRooms] = useState(null)
    useEffect(() => {
        const fetchRooms = async () => {
            await axios.post(`https://excited-foal-raincoat.cyclic.app/room/my-room`, { token: validUser?.token })
                .then(response => {
                    setRooms(response.data[0].myRooms)
                })
                .catch(err => {
                    toast.error(err.response, {
                        toastId: 'customId',
                        position: 'top-right',
                        theme: 'colored',
                        autoClose: 2000,
                    })
                });
        }
        fetchRooms()
    }, [])

    return (
        <div className='c-mt container m-auto min-h-screen pt-10 pb-20'>
            <div className=''>
                {
                    rooms ? <div className='m-auto text-center' >
                        <h1 className='text-start font-bold text-5xl pb-20 animate__animated animate__slideInRight'>My rooms <span className='text-lg text-stone-500'> ( {rooms.length} {(rooms.length < 2) ? 'exam' : 'exams'} )</span></h1>
                        <div className='flex flex-wrap gap-y-10  gap-x-20'>
                            {
                                rooms.map(room => {
                                    return (
                                        <SingleRoom room={room}></SingleRoom>
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



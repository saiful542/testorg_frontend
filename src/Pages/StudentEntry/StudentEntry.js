import { Token } from '@mui/icons-material';
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const StudentEntry = () => {
    const { validUser } = useAuth()
    const [rooms, setRooms] = useState([])
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
    console.log(validUser.token)
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2E0NTg1MzFhMDM4YjgwM2I0M2RmYmYiLCJpYXQiOjE2NzI3NjYzODMsImV4cCI6MTY3MzAyNTU4M30.4lgSRCN3HknBcq36XHke6VO2nZetei3ed4_2aqHL7iI`
    const fetchRooms = async () => {
        await axios.get(`https://excited-foal-raincoat.cyclic.app/room/my-room`, { token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2E0NTg1MzFhMDM4YjgwM2I0M2RmYmYiLCJpYXQiOjE2NzI3NjYzODMsImV4cCI6MTY3MzAyNTU4M30.4lgSRCN3HknBcq36XHke6VO2nZetei3ed4_2aqHL7iI` })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                // console.log(err.response.data);
                toast.error(err.response.data, {
                    toastId: 'customId',
                    position: 'top-right',
                    theme: 'colored',
                    autoClose: 2000,
                })
            });
    }
    return (
        <div className='c-mt container m-auto min-h-screen'>
            <div className='flex justify-center'>
                <img className='' src='../files/join room.gif' />

            </div>
            <div className='min-h-screen flex flex-col md:flex-row md:justify-around md:pt-20 gap-10'>
                <div>
                    <button onClick={() => { fetchRooms() }} className='border-0 button-custom bg-gradient-to-bl from-indigo-800 via-cyan-500 to-indigo-800 btn  text-white px-16 hover:bg-indigo-700'>My Rooms</button>
                </div>
                <div>
                    <button className='border-0 button-custom bg-gradient-to-bl from-indigo-800 via-cyan-500 to-indigo-800 btn  text-white px-16 hover:bg-indigo-700'>Join Room</button>
                </div>
            </div>

            {/* {
                rooms.map(room => {
                    return (
                        <div key={room.roomId} className='m-auto'>
                            <p>{room.roomId}</p>
                        </div>
                    )
                })
            } */}


        </div>
    );
}

export default StudentEntry;

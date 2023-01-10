import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SingleRoom = (props) => {
    const navigate = useNavigate()
    const { room } = props;

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
                    color: `success`,
                    animation: `animate-pulse`

                }
                return obj

            }
            else {
                let obj = {
                    status: `ended`,
                    color: `ghost`,
                }
                return obj
            }
        }
    }

    const showRoom = () => {

        if (getStatus(room).status == 'running') {
            Swal.fire({
                icon: 'success',
                title: 'This exam is already running',
                showCancelButton: true,
                confirmButtonText: 'Continue examining',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/Student/Exam', { state: { room: room } })
                } else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info')
                }
            })
        }
        else if (getStatus(room).status == 'ended') {
            Swal.fire({
                width: '40%',
                title: 'This exam has already ended',
                icon: 'error',
                showDenyButton: false,
                showCancelButton: true,
                confirmButtonText: 'details',
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        width: '40vw',
                        title: `${room.CourseName}`,
                        html:
                            `Instructor : <b>${room.teacherName}</b>` + '</br>' +
                            `<p className='text-red-400'>You have scored <b>${room.gotMarks}</b> out of ${room.totalMarks} </p> ` +
                            `This exam was taken on <b>${new Date(`${room.startTime}`).toLocaleDateString()}</b>` + '</br>' +
                            'Better luck next time!',
                        icon: 'info'
                    })
                } else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info')
                }
            })
        }
        else {
            Swal.fire({
                width: '40vw',
                icon: 'info',
                title: 'This exam has not started yet',
                text: `Exam will start on  ${new Date(`${room.startTime}`).toISOString().split('T')[0]}  at  ${new Date(`${room.startTime}`).toLocaleTimeString()}`,
                showCancelButton: true,
                confirmButtonText: 'Go to waiting room',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/Student/Timer', { state: { room: room } })
                } else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info')
                }
            })
        }
    }

    return (
        <div title='click me' className={`animate__animated animate__slideInRight ${getStatus(room).animation}`}>
            <div data-tip="hello" onClick={() => { showRoom() }} className=" card w-96 shadow-2xl image-full h-64 cursor-pointer hover:scale-105 transition-all " data-theme="halloween" >
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-gray-200">
                        {room.CourseName}
                        <div className='text-end w-full'>
                            <div className={`float-right badge badge-${getStatus(room).color}`}>{getStatus(room).status}</div>
                        </div>
                    </h2>
                    <div className='justify-start'>
                        <p className='text-start font-thin '>Instructor : {room.teacherName}</p>
                        <p className='text-start font-thin '>Total marks of exam : {room.totalMarks}</p>
                        <p className='text-start font-thin'>I got : <span className='font-normal'>{room.gotMarks}</span> marks</p>
                    </div>
                    <div className="card-actions justify-start items-end h-full">
                        <div className="badge badge-outline">{new Date(`${room.startTime}`).toDateString()}</div>
                        <div className="badge badge-outline items-end">{new Date(`${room.startTime}`).toLocaleTimeString()}</div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SingleRoom;
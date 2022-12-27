import React from 'react';
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/joy/Button';
import { CssVarsProvider } from '@mui/joy/styles';





// import { Button } from '@material-ui/core';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';


const Room = () => {
    const [date, setDate] = React.useState(null);
    const [startTime, setStartTime] = React.useState(null);
    const [endTime, setEndTime] = React.useState(null);
    const [courseName, setCourseName] = React.useState('');
    const [teacherName, setTeacherName] = React.useState('');

    const { validUser } = useAuth()
    return (

        <div className='container min-h-screen c-mt m-auto pb-20'>
            <div className="flex md:flex-row justify-around gap-10 lg:pt-24 flex-col">
                <div className="content w-full md:w-1/3 flex

                flex-col gap-10 lg:gap-24">

                    <div className='text-start'><label htmlFor="input" className='text-2xl text-cyan-800 font-serif font-bold'>Teacher</label><input nInput={(e) => setTeacherName(e.target.value)} className='mt-5 h-14 input border-2  border-cyan-700' type="text" defaultValue={validUser?.userName} placeholder='teachers name' /></div>

                    <div className='text-start'><label htmlFor="input" className='text-2xl text-cyan-800 font-serif font-bold'>Course</label><input onInput={(e) => setCourseName(e.target.value)} className='mt-5 h-14 input border-2 border-cyan-700' type="text" placeholder='course name' /></div>

                </div>
                <div className='lg:w-1/3'>
                    <div className='pb-5 text-start'>
                        <label htmlFor="input" className='text-2xl text-cyan-800 font-serif font-bold'>Exam date and time</label>
                    </div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack spacing={6}>
                            <DatePicker
                                disableFuture
                                label="Exam date"
                                views={['year', 'month', 'day']}
                                value={date}
                                onChange={(newValue) => {
                                    setDate(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                            <TimePicker
                                label="Start Time"
                                value={startTime}
                                onChange={(newValue) => {
                                    setStartTime(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                            <TimePicker

                                label="End Time"
                                value={endTime}
                                onChange={(newValue) => {
                                    setEndTime(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />

                        </Stack>
                    </LocalizationProvider>
                </div>
            </div>
            <div className='button-wrapper pt-40'>
                <Link to={{
                    pathname: "/",
                    state: {
                        date: date,
                        startTime: startTime,
                        endTime: endTime,
                        courseName: courseName,
                        teacherName: teacherName
                    }
                }} className='nb-custom bg-gradient-to-r from-indigo-800 to-cyan-500 btn  text-white px-16 hover:bg-indigo-700'>Next &nbsp;&nbsp;&rarr;</Link>
            </div>
        </div>
    );
};

export default Room;



{/* <div className="content w-full md:w-1/3 flex

                flex-col gap-10 lg:gap-20">

                    <div className='text-start flex items-center justify-between'><label htmlFor="input" className='text-2xl text-cyan-800 font-serif font-bold'>Exam Date</label><input className='mt-2 input border-2  border-cyan-700' type="date" name="" id="" /></div>

                    <div className='text-start flex items-center justify-between '><label htmlFor="input" className='text-2xl text-cyan-800 font-serif font-bold'>Starting time</label><input className='mt-2 input border-2 border-cyan-700' type="time" name="" id="" /></div>

                    <div className='text-start flex items-center justify-between '><label htmlFor="input" className='text-2xl text-cyan-800 font-serif font-bold'>End time</label><input className='mt-2 input border-2 border-cyan-700' type="time" name="" id="" /></div>

                </div> */}
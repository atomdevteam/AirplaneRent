import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
const ScheduleForm = () => {
    const [showModal, setshowModal] = useState(false)
    const [name, setname] = useState("")
    const [fuel, setfuel] = useState("")
    const [selectedTime, setSelectedTime] = useState(null);
    const [TimeEnd, setTimeEnd] = useState(null)

    const handleTimeChange = (time) => {
        const start = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        setSelectedTime(time);
        console.log("Start")
        console.log(start);
    };

    const handleTimeEnd = (time) => {
        const end = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        const start = selectedTime ? selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : null;

        if (start && time > selectedTime) {
            setTimeEnd(time);
            console.log("End:", end);
        } else {
            console.log("End time should be greater than start time");
        }
    }

    const handleSave = (e) => {
        e.preventDefault()
        const start = selectedTime ? selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : null;
        const end = TimeEnd ? TimeEnd.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : null;
        const datos = {
            name: name,
            start: start,
            end: end,
            fuel:fuel,
        }
        console.log("Datos")
        console.log(datos)
    }
    return (
        <div className='bg-gray-100 p-4 flex items-center justify-center h-screen'>
            <div>
                <button
                    onClick={() => setshowModal(true)}
                    className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300'

                > Schedule</button>
            </div>

            {showModal && (
                <div className='fixed inset-0 flex items-center justify-center z-50'>
                    <div className='bg-white rounded-lg p-6 w-96 max-w-full shadow-lg transform transition-all duration-300'>
                        <div className='flex justify-between items-center border-b-2 border-gray-200 pb-4'>
                            <h2 className="text-2xl font-semibold">Schedule Form</h2>
                            <button
                                onClick={() => setshowModal(false)}
                                className='text-gray-500 hover:text-gray-700 focus:outline-none'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>

                        <div className='mt-6 space-y-4'>

                            <form className='grid gap-y-4' onSubmit={handleSave}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold ml-1 mb-2 text-black">Name</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Name"
                                            onChange={(e) => setname(e.target.value)}
                                            className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" />
                                    </div>

                                </div>
                                <div>
                                    <div className='flex flex-row '>
                                        <div className='mr-4'>
                                            <label className="block text-sm font-bold ml-1 mb-2 text-black">Start</label>
                                            <div className="relative">
                                                <DatePicker
                                                    selected={selectedTime}
                                                    onChange={handleTimeChange}
                                                    showTimeSelect
                                                    showTimeSelectOnly
                                                    timeIntervals={15}
                                                    timeCaption="Time"
                                                    dateFormat="h:mm aa"
                                                    placeholderText="Select time"
                                                    className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                                />

                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold ml-1 mb-2 text-black">End</label>
                                            <div className="relative">
                                                <DatePicker
                                                    selected={TimeEnd}
                                                    onChange={handleTimeEnd}
                                                    showTimeSelect
                                                    showTimeSelectOnly
                                                    timeIntervals={15}
                                                    timeCaption="Time"
                                                    dateFormat="h:mm aa"
                                                    placeholderText="Select time"
                                                    className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                                />

                                            </div>
                                        </div>
                                    </div>
                                    <div className='my-4'>
                                        <label htmlFor="fuel" className="block text-sm font-bold ml-1 mb-2 text-black">Fuel</label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="fuel"
                                                name="fuel"
                                                placeholder="Fuel"
                                                onChange={(e) => setfuel(e.target.value)}
                                                className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" />
                                        </div>

                                    </div>

                                    <div className='my-8'>
                                        <button
                                            type='submit'
                                            className="middle none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"

                                        >
                                            Save
                                        </button>
                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            )}

        </div>
    )
}

export default ScheduleForm
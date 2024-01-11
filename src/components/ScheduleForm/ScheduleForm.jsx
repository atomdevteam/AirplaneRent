import React, { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { useContextAir } from '../../Context';
const ScheduleForm = ({ isOpen, setIsOpen, onSave, reservations, setReservations, date, reservationEdit, setreservationEdit }) => {
    const { SaveScheduledform, 
        AllReservations, 
        DeleteScheduleById, 
        EditScheduleById, 
        user,
        CanEdit,
        CanDelete
    } = useContextAir()
    const [showModal, setshowModal] = useState(false)
    const [name, setname] = useState("")
    const [fuel, setfuel] = useState("")
    const [selectedTime, setSelectedTime] = useState(null);
    const [TimeEnd, setTimeEnd] = useState(null)
    const [idreservation, setidreservation] = useState()
    const MAX_FUEL = 50; 

    const handleTimeChange = (time) => {
        const start = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        setSelectedTime(time);
    };

    const handleTimeEnd = (time) => {
        const end = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        const start = selectedTime ? selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : null;

        if (start && time > selectedTime && time !== selectedTime) {
            setTimeEnd(time);
        } else {
            console.log("End time should be greater than start time");
        }
    }

    const formattedMesActual = format(date, 'yyyy-MM-dd');

    const handleSave = (e) => {
        e.preventDefault()
        const start = selectedTime ? selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }).replace(/^24/, '00') : null;
        const end = TimeEnd ? TimeEnd.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }).replace(/^24/, '00') : null;

        const overlapsExistingReservation = reservations.some(reserva =>
            (start >= reserva.start && start < reserva.end) ||
            (end > reserva.start && end <= reserva.end) ||
            (start <= reserva.start && end >= reserva.end)
        );

        const overlapsWithExistingDate = reservations.some(reserva =>
            formattedMesActual === reserva.date &&
            (
                (start >= reserva.start && start < reserva.end) ||
                (end > reserva.start && end <= reserva.end) ||
                (start <= reserva.start && end >= reserva.end)
            )
        );
        if (overlapsExistingReservation && overlapsWithExistingDate) {
            console.log('La nueva reserva se superpone con una reserva existente en el mismo horario y fecha. Elige otro horario o fecha.');
            return;
        }
        

        if (fuel > MAX_FUEL) {
          console.log('La cantidad de combustible no puede ser mayor a 50.');
          return;
        }
        const highestId = AllReservations.reduce((maxId, reserva) => {
            return reserva.id > maxId ? reserva.id : maxId;
        }, 0);
        const newId = highestId + 1;
        if (newId && name && start && end && fuel && formattedMesActual) {
            const datos = {
                id: newId,
                id_user: user.uid,
                name: name,
                start: start,
                end: end,
                fuel: fuel,
                date: formattedMesActual
            };
            SaveScheduledform(datos)
            onSave(datos);

            setIsOpen(false)
            setname("")
            setSelectedTime(null)
            setTimeEnd(null)
            setfuel("")
        } else {
            console.log('Todos los campos son obligatorio');
        }


    }

    useEffect(() => {
        if (reservationEdit) {
            setidreservation(reservationEdit.id)
            setname(reservationEdit.name)
            const horaInicio = reservationEdit.start;
            const [hour, minute] = horaInicio.split(':');
            const fechaHoraInicio = new Date();
            fechaHoraInicio.setHours(parseInt(hour, 10));
            fechaHoraInicio.setMinutes(parseInt(minute, 10));
            setSelectedTime(fechaHoraInicio);
            const horafinal = reservationEdit.end
            const [hourend, minuteend] = horafinal.split(':')
            const fechaHoraFinal = new Date()
            fechaHoraFinal.setHours(parseInt(hourend, 10))
            fechaHoraFinal.setMinutes(parseInt(minuteend, 10))
            setTimeEnd(fechaHoraFinal)
            setfuel(reservationEdit.fuel)
        }
    }, [reservationEdit])

    const handleEdit = (e) => {
        e.preventDefault()
        if (CanEdit === true) {
             const reservaAEditar = AllReservations.find(reserva => reserva.id === idreservation);

        if (reservaAEditar) {
            const dateNow = new Date()
            const dateNowFormat = format(dateNow, 'yyyy-MM-dd');

            if (dateNowFormat <= reservaAEditar.date) {
                const start = selectedTime ? selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }).replace(/^24/, '00') : null;
                const end = TimeEnd ? TimeEnd.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }).replace(/^24/, '00') : null;
                const overlapsExistingReservation = AllReservations.some(reserva =>
                    reserva.id !== reservaAEditar.id && (
                        (start >= reserva.start && start < reserva.end) ||
                        (end > reserva.start && end <= reserva.end) ||
                        (start <= reserva.start && end >= reserva.end)
                    )
                );

                const overlapsWithExistingDate = AllReservations.some(reserva =>
                    reserva.id !== reservaAEditar.id &&
                    formattedMesActual === reserva.date &&
                    (
                        (start >= reserva.start && start < reserva.end) ||
                        (end > reserva.start && end <= reserva.end) ||
                        (start <= reserva.start && end >= reserva.end)
                    )
                );
                if (overlapsExistingReservation && overlapsWithExistingDate) {
                    console.log('La nueva reserva se superpone con una reserva existente en el mismo horario y fecha. Elige otro horario o fecha.');
                    return;
                }

                if (fuel > MAX_FUEL) {
                    console.log('La cantidad de combustible no puede ser mayor a 50.');
                    return;
                  }

                const editedReservation = {
                    id: reservaAEditar.id,
                    name: name,
                    start: start,
                    end: end,
                    fuel: fuel,
                    date: formattedMesActual
                };

                const confirmed = window.confirm('Are you sure to edit this reservation?');

                if (confirmed) {
                    EditScheduleById(idreservation, editedReservation);
                    setIsOpen(false);
                    setname("");
                    setSelectedTime(null);
                    setTimeEnd(null);
                    setfuel("");
                } else {
                    console.log('Edit canceled by user.');
                }

            } else {
                console.log("No se pued editar reservaciones pasadas")
            }


        } else {
            console.log('La reserva con el ID proporcionado no se encontró.');
        }
        }else {
            window.confirm('You do not have permission to edit!')
        }
       
    }

    const handleDelete = (e) => {
        e.preventDefault()
        if (CanDelete) {
              const confirmed = window.confirm('Are you sure to delete this reservation?');
        if (confirmed) {
            DeleteScheduleById(reservationEdit.id)
            setIsOpen(false)
            setname("")
            setSelectedTime(null)
            setTimeEnd(null)
            setfuel("")
        }else {
            console.log('Deletion canceled by user.')
        }
        }else {
            window.confirm('You do not have permission to delete!')
        }
      
    }

    useEffect(() => {

        // {user && user.displayName}

        if (user) {
            // setname(user.displayName)
            setname(localStorage.getItem("DisplayName"))
        }

    }, [user, isOpen])







    const handleCloseModal = (e) => {
        e.preventDefault()
        setIsOpen(false)
        setname("");
        setSelectedTime(null);
        setTimeEnd(null);
        setfuel("");
        setreservationEdit(null)
    }

    return (

        <div className=''>
            {isOpen && (
                <div className='fixed inset-0 flex items-center justify-center z-50'>
                    <div className='bg-[#1d2c3d] rounded-lg p-6 w-96 max-w-full shadow-lg transform transition-all duration-300 '>
                        <div className='flex justify-between items-center border-b-2 border-gray-200 pb-4'>
                            <h2 className="text-2xl font-semibold">Schedule Form</h2>
                            <button
                                onClick={(e) => handleCloseModal(e)}
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
                                    <label htmlFor="name" className="block text-sm font-bold ml-1 mb-2 text-white">Name</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Name"
                                            value={name}
                                            onChange={(e) => setname(e.target.value)}
                                            className="py-3 px-4 block w-full text-black border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" />
                                    </div>

                                </div>
                                <div>
                                    <div className='flex flex-row '>
                                        <div className='mr-4'>
                                            <label className="block text-sm font-bold ml-1 mb-2 text-white">Start</label>
                                            <div className="relative">
                                                <DatePicker
                                                    selected={selectedTime}
                                                    value={selectedTime}
                                                    onChange={handleTimeChange}
                                                    showTimeSelect
                                                    showTimeSelectOnly
                                                    timeIntervals={60}
                                                    timeCaption="Time"
                                                    dateFormat="h aa"
                                                    placeholderText="Select time"
                                                    className="py-3 px-4 block w-full border-2 text-black border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                                />

                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold ml-1 mb-2 text-white">End</label>
                                            <div className="relative">
                                                <DatePicker
                                                    selected={TimeEnd}
                                                    onChange={handleTimeEnd}
                                                    showTimeSelect
                                                    showTimeSelectOnly
                                                    timeIntervals={60}
                                                    timeCaption="Time"
                                                    dateFormat="h aa"
                                                    placeholderText="Select time"
                                                    className="py-3 px-4 block w-full border-2 text-black border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                                />

                                            </div>
                                        </div>
                                    </div>
                                    <div className='my-4'>
                                        <label htmlFor="fuel" className="block text-sm font-bold ml-1 mb-2 text-white">Fuel</label>
                                        <div className="relative">
                                            <input
                                                type="number"
                                                id="fuel"
                                                name="fuel"
                                                placeholder="Fuel"
                                                value={fuel}
                                                onChange={(e) => setfuel(e.target.value)}
                                                className="py-3 px-4 block w-full border-2 text-black border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" />
                                        </div>

                                    </div>

                                    <div className='my-8'>
                                        {reservationEdit === null ?
                                            <button
                                                type='submit'
                                                className="middle w-full none center mr-4 rounded-lg bg-[#0d7ca8] py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"

                                            >
                                                Save
                                            </button> : (
                                                <div className='flex justify-center items-center'>
                                                    <button
                                                        onClick={(e) => handleEdit(e)}
                                                        className="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"

                                                    >
                                                        Editar
                                                    </button>
                                                    <button
                                                        onClick={(e) => handleDelete(e)}
                                                        className="middle none center mr-4 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"

                                                    >
                                                        Delete
                                                    </button>
                                                </div>


                                            )

                                        }


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
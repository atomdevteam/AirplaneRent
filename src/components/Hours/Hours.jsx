import { useState, useEffect } from 'react';
import ScheduleForm from "../ScheduleForm/ScheduleForm"
import { Link, useParams } from "react-router-dom"
import { format } from 'date-fns';
import { useContextAir } from '../../Context';
import { FaRegCalendarAlt } from "react-icons/fa";
import iconCalendar from "../../Icon/icon_cal.png"
function Hours() {
  const datos = useParams();
  const {
    ShowListHours,
    ReservationsForDate,
    user,
    CanReservation,
    CanEdit,
    CanDelete,
    WhichRole
  } = useContextAir()
  // const fechaEspecifica = new Date()
  const [fechaEspecifica, setFechaEspecifica] = useState(new Date());
  fechaEspecifica.setDate(datos.Dia)
  fechaEspecifica.setFullYear(datos.Year)
  fechaEspecifica.setMonth(datos.Month)
  const [horasDelDia, setHorasDelDia] = useState([]);

  const [reservations, setReservations] = useState([]);
  const [reservationEdit, setreservationEdit] = useState(null)



  const [mesActual, setMesActual] = useState(fechaEspecifica);
  const [Inicio, setInicio] = useState(0)
  const [Final, setFinal] = useState(0)

  // const horas = Array.from({ length: 24 }, (_, i) => {
  //   const hour = (i === 0) ? 12 : (i > 12) ? i - 12 : i;

  //   const timeString = new Date().setHours(i, 0, 0);
  //   const formattedTime = new Date(timeString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  //   return `${formattedTime}`;
  // });

  const horas = Array.from({ length: 24 }, (_, i) => i);



  const irAlMesSiguiente = () => {
    setMesActual(new Date(mesActual.getFullYear(), mesActual.getMonth(), mesActual.getDate() + 1));
  };
  const irAlMesAnterior = () => {
    setMesActual(new Date(mesActual.getFullYear(), mesActual.getMonth(), mesActual.getDate() - 1));
  };


  const [nombre, setnombre] = useState("")
  const [cantidad, setcantidad] = useState("")
  const [dateselect, setdateselect] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const year = fechaEspecifica.getFullYear();
  const month = fechaEspecifica.getMonth() + 1;
  const day = fechaEspecifica.getDate();



  const [Data, setData] = useState(null);
  const dateSelect = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

  const handleSaveModalData = (data) => {
    setReservations([...reservations, data]);
    setData(data);
    setInicio(data.start)
    setFinal(data.end)
    setnombre(data.name)
    setcantidad(data.fuel)
    setdateselect(dateSelect);
  };


  useEffect(() => {
    const horasActuales = Array.from({ length: 24 }, (_, i) => {
      const hour = (i === 0) ? 12 : (i > 12) ? i - 12 : i;
      const timeString = new Date(fechaEspecifica.getFullYear(), fechaEspecifica.getMonth(), fechaEspecifica.getDate(), i, 0, 0);
      const formattedTime = timeString.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }).replace(/^24/, '00');
      return `${formattedTime}`;
    });

    setHorasDelDia(horasActuales);
  }, [fechaEspecifica, mesActual]);

  const formattedMesActual = format(mesActual, 'yyyy-MM-dd');
  useEffect(() => {
    ShowListHours(formattedMesActual);
  }, [formattedMesActual])
  useEffect(() => {
    ShowListHours(formattedMesActual); // Ejecutar ShowListHours al iniciar el componente
  }, []);



  const [reservationsA, setreservationsA] = useState([])

  useEffect(() => {
    setreservationsA(ReservationsForDate)
    console.log("hoursss")
    console.log(reservationsA)
  }, [ReservationsForDate])










  return (
    <div className="bg-[#070d16] text-white">

      <ScheduleForm isOpen={isOpen} setIsOpen={setIsOpen} onSave={handleSaveModalData} reservations={reservations} setReservations={setReservations} date={mesActual} reservationEdit={reservationEdit} setreservationEdit={setreservationEdit} />

      <div className=' w-full h-[5rem] flex items-center border-b-2'>
        <div className='flex items-center justify-between py-2 px-6'>
          <div className='px-1 flex items-center'>

            <div className='flex row '>
              <Link className="pl-4 pr-4" to={"/"}>
                {/* < FaRegCalendarAlt size={30} /> */}
                {/* <img src={iconCalendar} className='w-16 h-16 filter brightness-0 invert saturate-150 contrast-200' /> */}
                <img src={iconCalendar} className='w-16 h-16' />

              </Link>



              <button
                type='button'
                className='leading-none rounded-full transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center'
                onClick={irAlMesAnterior}
              >
                <svg
                  className='h-6 w-6 text-gray-500 inline-flex leading-none'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7'></path>
                </svg>
              </button>
              <div className=' inline-flex h-6'></div>
              <button
                type='button'
                className='leading-none rounded-full transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1'
                onClick={irAlMesSiguiente}
              >
                <svg
                  className='h-6 w-6 text-gray-500 inline-flex leading-none'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7'></path>
                </svg>
              </button>



            </div>
            <div className='ml-4 text-white'>
              <span className="text-lg  font-normal">{mesActual.toLocaleString('default', { day: 'numeric' }) + " de "}</span>
              <span className="text-lg   mr-1">{mesActual.toLocaleString('default', { month: 'long' })}</span>
              <span className="text-lg  font-normal">{mesActual.toLocaleString('default', { year: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-rows-8 pl-10 mx-4">
        {/* gap-4 */}
        {/* `bg-${Color}` */}
        {/*  */}
        <div className="pt-4">Hora</div>
        {horasDelDia.map((hora, index) => {
          const reservacionesEnEstaHora = reservationsA.filter(
            reserva =>
              reserva.start <= hora && reserva.end > hora &&
              formattedMesActual === reserva.date
          );

          const isHoraReservada = reservacionesEnEstaHora.length > 0;
          let reservaMostrar = null;

          if (isHoraReservada) {
            reservaMostrar = reservacionesEnEstaHora.find(reserva =>
              reserva.start <= hora && reserva.end >= hora
            );
          }

          return (
            <div key={index} className='flex h-[4rem]'>
              <span className={`mr-2 ${hora <= 9 ? 'pr-10' : 'pr-8'}`}>
                {hora}
              </span>
              <div
                key={index}
                className={` ${isHoraReservada ? 'flex-1  p-6 bg-[#0d7ca8]' : 'flex-1 border p-6 cursor-pointer  hover:bg-gray-200  transition ease-in-out'
                  }`}
                onClick={() => {
                  if (reservaMostrar) {
                    if (CanEdit === true) {
                      if (WhichRole === "user") {
                        if (user && user.uid === reservaMostrar.id_user) {
                          setIsOpen(true);
                          setreservationEdit(reservaMostrar)
                        }
                      } else {
                        setIsOpen(true);
                        setreservationEdit(reservaMostrar)
                      }

                    } else {
                      window.confirm('You do not have permission to edit or delete!');
                    }


                  } else {
                    if (CanReservation === true) {
                      setIsOpen(true);
                    } else {
                      window.confirm('You do not have permission to reserve!');
                    }

                  }

                }}
              >
                {reservacionesEnEstaHora.map((reserva, reservaIndex) => (
                  <div key={reservaIndex} className=''>
                    {
                      formattedMesActual === reserva.date && (
                        reserva.start <= hora && reserva.end >= hora && (
                          reserva.start === hora && (
                            <div key={reservaIndex} className='text-xs text-white '>
                              <p className='font-bold'>{reserva.name}</p>
                              <p>{reserva.start >= "13:00" ? reserva.start + " pm" : reserva.start + " am"} - {reserva.end >= "13:00" ? reserva.end + " pm" : reserva.end + " am"} {reserva.fuel + " gal"}</p>

                            </div>
                          )
                        )
                      )
                    }
                  </div>

                )
                )}

              </div>
            </div>
          );
        })}



      </div>

    </div>
  );
}

export default Hours
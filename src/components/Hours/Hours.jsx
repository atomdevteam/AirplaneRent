import { useState, useEffect } from 'react';
import ScheduleForm from "../ScheduleForm/ScheduleForm"
import { useParams } from "react-router-dom"
function Hours() {
  const datos = useParams();
  const fechaEspecifica = new Date()
  fechaEspecifica.setDate(datos.Dia)
  fechaEspecifica.setFullYear(datos.Year)
  fechaEspecifica.setMonth(datos.Month)

  const [mesActual, setMesActual] = useState(fechaEspecifica);
  const [Inicio, setInicio] = useState(0)
  const [Final, setFinal] = useState(0)

  const horas = Array.from({ length: 24 }, (_, i) => {
    const hour = (i === 0) ? 12 : (i > 12) ? i - 12 : i;

    const timeString = new Date().setHours(i, 0, 0);
    const formattedTime = new Date(timeString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return `${formattedTime}`;
  });



  const irAlMesSiguiente = () => {
    setMesActual(new Date(mesActual.getFullYear(), mesActual.getMonth(), mesActual.getDate() + 1));
  };
  const irAlMesAnterior = () => {
    setMesActual(new Date(mesActual.getFullYear(), mesActual.getMonth(), mesActual.getDate() - 1));
  };


  const [nombre, setnombre] = useState("")
  const [cantidad, setcantidad] = useState("")
  const [isOpen, setIsOpen] = useState(false)




  const [Data, setData] = useState(null);

  const handleSaveModalData = (data) => {
    setData(data);
    console.log('Datos recibidos en ParentComponent:', data);
    console.log("Start: " + data.start)
    console.log("End: " + data.end)
    setInicio(data.start)
    setFinal(data.end)
    setnombre(data.name)
    setcantidad(data.fuel)
  };

  const handleSaveDelete = () => {
    const dataToSend = {
      start: Inicio,
      end: Final,
      name: nombre,
      fuel: cantidad,
    };
    setData(dataToSend);
    setIsOpen(true); // Abre el modal para mostrar los datos seleccionados
  };

  useEffect(() => {
    console.log("UseEffect")
    console.log("Start: " + Inicio)
    console.log("End: " + Final)
    console.log("Name: " + nombre)
    console.log("Fuel: " + cantidad)
  }, [Inicio, Final])

  let isFirstHour = true;







  return (
    <>

      <ScheduleForm isOpen={isOpen} setIsOpen={setIsOpen} onSave={handleSaveModalData} data={Data} />

      <div className=' w-full h-[5rem] flex items-center border-b-2 '>
        <div className='flex items-center justify-between py-2 px-6'>
          <div className='px-1 flex items-center'>

            <div className=' mx-4'>
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
            <div>
              <span className="text-lg text-black font-normal">{mesActual.toLocaleString('default', { day: 'numeric' }) + " de "}</span>
              <span className="text-lg  text-black mr-1">{mesActual.toLocaleString('default', { month: 'long' })}</span>
              <span className="text-lg text-black font-normal">{mesActual.toLocaleString('default', { year: 'numeric' })}</span>


            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-rows-8 pl-10 ">
        {/* gap-4 */}
        {/* `bg-${Color}` */}
        {/*  */}
        <div className="pt-4">Hora</div>
        {horas.filter(hora => hora !== 0).map((hora, index) => {
          const isStartHour = Inicio === hora;

          if (isStartHour) {
            isFirstHour = true;
          }

          return (
            <div key={index} className='flex h-[4rem]'>
              <span className={`mr-2 ${hora <= 9 ? 'pr-10' : 'pr-8'}`}>
                {hora}
              </span>
              <div
                onClick={() => {
                  handleSaveDelete();
                  setIsOpen(true);
                }}
                className={` ${Inicio <= hora && Final >= hora ? `flex-1  p-6 bg-green-500` : "flex-1 border p-6 cursor-pointer  hover:bg-gray-200  transition ease-in-out"}`}>

                {Inicio <= hora && Final >= hora &&
                  isStartHour && isFirstHour && (
                    <div className='text-xs  text-white'>
                      <p className='font-bold'>{nombre}</p>
                      {/*  {hora >= "13:00" ? hora + " PM" : hora + " AM"} */}
                      <p>{Inicio >= "13:00" ? Inicio + " pm" : Inicio + " am"} - {Final >= "13:00" ? Inicio + " pm" : Final + " am"}</p>
                    </div>
                  )
                }
              </div>
            </div>
          );
        })}

        {/* {horas.filter(hora => hora !== 0).map((hora, index) => (
            <div key={index} className='flex'>
              <span className={`mr-2 ${hora <= 9 ? 'pr-10' : 'pr-8'}`}>
                {hora}
              </span>
              <div
                onClick={() => {
                  // Llama a handleSave para guardar la información antes de abrir el modal
                  handleSaveDelete();
                  setIsOpen(true);
                }}
                className={`flex-1 border p-6 cursor-pointer  hover:bg-gray-200  transition ease-in-out ${Inicio <= hora && Final >= hora ? `bg-green-500` : ""}`}>

                {Inicio <= hora && Final >= hora ?
                  <>
                    {nombre + " "}
                    {cantidad}
                  </>
                  : ""}
              </div>
            </div>
          ))} */}
        {/* {horas.map((hora, index) => (
            <div key={index} className='flex'>
              <span className={`mr-2 ${hora <= 9 ? 'pr-10' : 'pr-8'}`}>
                {hora >= 13 ? hora + ' PM' : hora + ' AM'}
              </span>
            
              <div
                className={`flex-1 border p-6 ${selectedTime && selectedTime.getHours() === hora
                    ? 'bg-green-500'
                    : ''
                  }`}
              >
                {hora}
              </div>
            </div>
          ))} */}

      </div>

    </>
  );
}

export default Hours
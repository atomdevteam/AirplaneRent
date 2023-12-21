import { useState, useEffect } from 'react';
import ScheduleForm from "../ScheduleForm/ScheduleForm"
function Hours() {
  const [mesActual, setMesActual] = useState(new Date());
  const [Inicio, setInicio] = useState(0)
  const [Final, setFinal] = useState(0)

  // const horas = Array.from({ length: 24 }, (_, i) => i);
  //11:00 a. m.
  const horas = Array.from({ length: 24 }, (_, i) => {
    const hour = (i === 0) ? 12 : (i > 12) ? i - 12 : i;
    // const period = i < 12 || i === 24 ? 'a. m.' : 'p. m.';

    const timeString = new Date().setHours(i, 0, 0);
    const formattedTime = new Date(timeString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return `${formattedTime}`;
  });

  const obtenerDiasDelMes = () => {
    const primerDiaDelMes = new Date(mesActual.getFullYear(), mesActual.getMonth(), 1);
    const ultimoDiaDelMes = new Date(mesActual.getFullYear(), mesActual.getMonth() + 1, 0);

    const dias = [];
    for (let dia = primerDiaDelMes; dia <= ultimoDiaDelMes; dia.setDate(dia.getDate() + 1)) {
      dias.push(new Date(dia));
    }

    return dias;
  };


  const irAlMesSiguiente = () => {
    setMesActual(new Date(mesActual.getFullYear(), mesActual.getMonth() + 1, 1));
  };
  const irAlMesAnterior = () => {
    setMesActual(new Date(mesActual.getFullYear(), mesActual.getMonth() - 1, 1));
  };

  const diasDelMes = obtenerDiasDelMes();

  const [selectedHourInicial, setSelectedHourInicial] = useState('');
  const [selectedHourFinal, setSelectedHourFinal] = useState('');
  const [nombre, setnombre] = useState("")
  const [cantidad, setcantidad] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [Color, setColor] = useState("")
  const handleHourChange = (e) => {
    setSelectedHourInicial(e.target.value);
  };

  const handleMinuteChange = (e) => {
    setSelectedHourFinal(e.target.value);
  };

  const handleSave = () => {
    // Aquí puedes realizar alguna acción con las horas seleccionadas
    setInicio(selectedHourInicial)
    setFinal(selectedHourFinal)
    console.log(`Hora seleccionada: ${selectedHourInicial}:${selectedHourFinal}`);
    console.log(`Nombre ${nombre} gasolina ${cantidad} color ${Color}`);

  };


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









  return (
    <>
      {/* {isOpen ?
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute bg-gray-800 opacity-50 inset-0"></div>
          <div className="bg-white p-8 rounded-lg z-10">
            <h2 className="text-2xl font-bold mb-4">Seleccionar Hora</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Introduce el nombre</label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setnombre(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Introduce la gasolina</label>
              <input
                type="text"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Gasolina"
                value={cantidad}
                onChange={(e) => setcantidad(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Seleccionar Color</label>
              <input
                type="color"
                className="mt-1 p-2 w-full border rounded-full"
                value={Color}
                onChange={(e) => setColor(e.target.value)}
              />
            </div>

            <div className="flex mb-4">
              <select className="mr-2 p-2 " value={selectedHourInicial} onChange={handleHourChange}>
                {[...Array(24).keys()].map((hour) => (
                  <option key={hour + 1} value={hour + 1}>
                    {hour + 1 < 10 ? `0${hour + 1}` : hour + 1}
                  </option>
                ))}
              </select>
              <select className="p-2" value={selectedHourFinal} onChange={handleMinuteChange}>
                {[...Array(24).keys()].map((hour) => (
                  <option key={hour + 13} value={hour + 1}>
                    {hour + 1 < 10 ? `0${hour + 1}` : hour + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-end">
              <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSave}>
                Guardar
              </button>
              <button
                className="px-4 py-2 ml-2 bg-gray-500 text-white rounded"
                onClick={() => setIsOpen(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
        : ""} */}
      <ScheduleForm isOpen={isOpen} setIsOpen={setIsOpen} onSave={handleSaveModalData} data={Data} />
      <div className="container  mt-8">

        <div className="flex pl-4 items-center mb-4">
          <button
            className=" text-black font-bold py-2 px-4 rounded pl-2"
            onClick={irAlMesAnterior}
          >

            {"<"}
          </button>
          <button
            className=" text-black font-bold py-2 px-4 rounded pl-2"
            onClick={irAlMesSiguiente}
          >
            {">"}
          </button>
          <h2 className="text-xl font-bold pl-2">
            {mesActual.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h2>
        </div>
        {/* <div className="flex justify-between items-center mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={irAlMesSiguiente}
        >
          Mes Siguiente
        </button>
        <h2 className="text-xl font-bold">
          {mesActual.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
      </div>

      <div className="grid grid-cols-8 gap-4">
        <div className="border p-2"></div>
        {diasDelMes.map((dia, index) => (
          <div key={index} className="border p-2 text-center">
            {dia.getDate()}
          </div>
        ))}
      </div> */}

        <div className="grid grid-rows-8 p-10 ">
          {/* gap-4 */}
          {/* `bg-${Color}` */}
          {/*  */}
          <div className="pt-4">Hora</div>
          {horas.filter(hora => hora !== 0).map((hora, index) => (
            <div key={index} className='flex'>
              <span className={`mr-2 ${hora <= 9 ? 'pr-10' : 'pr-8'}`}>
                {hora >= "13:00" ? hora + " PM" : hora + " AM"}
              </span>
              <div
                onClick={() => {
                  // Llama a handleSave para guardar la información antes de abrir el modal
                  handleSaveDelete();
                  setIsOpen(true);
                }}
                className={`flex-1 border p-6 ${Inicio <= hora && Final >= hora ? `bg-green-500` : ""}`}>

                {Inicio <= hora && Final >= hora ?
                  <>
                    {nombre + " "}
                    {cantidad}
                  </>
                  : ""}
              </div>
            </div>
          ))}
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
      </div >
    </>
  );
}

export default Hours
import { useState } from 'react';

function Hours() {
  const [mesActual, setMesActual] = useState(new Date());

  const [Inicio, setInicio] = useState(0)
  const [Final, setFinal] = useState(0)

  const horas = Array.from({ length: 24 }, (_, i) => i);

  // const obtenerDiasDelMes = () => {
  //   const primerDiaDelMes = new Date(mesActual.getFullYear(), mesActual.getMonth(), 1);
  //   const ultimoDiaDelMes = new Date(mesActual.getFullYear(), mesActual.getMonth() + 1, 0);

  //   const dias = [];
  //   for (let dia = primerDiaDelMes; dia <= ultimoDiaDelMes; dia.setDate(dia.getDate() + 1)) {
  //     dias.push(new Date(dia));
  //   }

  //   return dias;
  // };

  // const irAlMesSiguiente = () => {
  //   setMesActual(new Date(mesActual.getFullYear(), mesActual.getMonth() + 1, 1));
  // };

 

  // const diasDelMes = obtenerDiasDelMes();





return(

      <div className="container  mt-8">
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
          <div className="pt-4">Hora</div>
          {horas.filter(hora => hora !== 0).map((hora, index) => (
            <div key={index} className='flex'>
              <span className={`mr-2 ${hora <= 9 ? 'pr-10' : 'pr-8'}`}>
                {hora >= 13 ? hora + " PM" : hora + " AM"}
              </span>
              <div  className={`flex-1 border p-6 `}>
              {/* `bg-${Color}` */}
                
              </div>
            </div>
          ))}

        </div>
      </div>
    
  );
}

export default Hours
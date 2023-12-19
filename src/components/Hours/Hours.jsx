import { useState } from 'react';

function Hours() {
  const [mesActual, setMesActual] = useState(new Date());

  const horas = Array.from({ length: 24 }, (_, i) => i);

 

  const irAlMesSiguiente = () => {
    setMesActual(new Date(mesActual.getFullYear(), mesActual.getMonth() + 1, 1));
  };
  const irAlMesAnterior = () => {
    setMesActual(new Date(mesActual.getFullYear(), mesActual.getMonth() -1, 1));
  };



  


return(
  <>


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

  {/* <div className="grid grid-cols-8 gap-4">
    <div className="border p-2"></div>
    {diasDelMes.map((dia, index) => (
      <div key={index} className="border p-2 text-center">
        {dia.getDate()}
      </div>
    ))}
  </div>  */}

    <div className="grid grid-rows-8 p-10 ">
      {/* gap-4 */}
      <div className="pt-4">Hora</div>
      {horas.filter(hora => hora !== 0).map((hora, index) => (
        <div key={index} className='flex'>
          <span className={`mr-2 ${hora <= 9 ? 'pr-10' : 'pr-8'}`}>
            {hora >= 13 ? hora + " PM" : hora + " AM"}
          </span>
          <div className={`flex-1 border p-6`}>
          {/* `bg-${Color}` */}
         
          </div>
        </div>
      ))}

    </div>
  </div>
</>
    
  );
}

export default Hours
import React, { useState, useEffect } from 'react'

function Table() {

    var arregloDatos = [
        {
            imagen: 'https://th.bing.com/th/id/OIP.Lx6jNuMBRS7pWyIPxEBw6gHaED?rs=1&pid=ImgDetMain',
            nombre: 'Nombre1',
            descripcion: 'Descripción 1',
            pais: 'País1',
            hora: '10:00 AM'
        },
        {
            imagen: 'https://th.bing.com/th/id/OIP.Lx6jNuMBRS7pWyIPxEBw6gHaED?rs=1&pid=ImgDetMain',
            nombre: 'Nombre2',
            descripcion: 'Descripción 2',
            pais: 'País2',
            hora: '12:30 PM'
        },
        {
            imagen: 'https://th.bing.com/th/id/OIP.Lx6jNuMBRS7pWyIPxEBw6gHaED?rs=1&pid=ImgDetMain',
            nombre: 'Nombre3',
            descripcion: 'Descripción 1',
            pais: 'País1',
            hora: '10:00 AM'
        },
        {
            imagen: 'https://th.bing.com/th/id/OIP.Lx6jNuMBRS7pWyIPxEBw6gHaED?rs=1&pid=ImgDetMain',
            nombre: 'Nombre4',
            descripcion: 'Descripción 2',
            pais: 'País2',
            hora: '12:30 PM'
        },
        {
            imagen: 'https://th.bing.com/th/id/OIP.Lx6jNuMBRS7pWyIPxEBw6gHaED?rs=1&pid=ImgDetMain',
            nombre: 'Nombre5',
            descripcion: 'Descripción 1',
            pais: 'País1',
            hora: '10:00 AM'
        },
        {
            imagen: 'https://th.bing.com/th/id/OIP.Lx6jNuMBRS7pWyIPxEBw6gHaED?rs=1&pid=ImgDetMain',
            nombre: 'Nombre6',
            descripcion: 'Descripción 2',
            pais: 'País2',
            hora: '12:30 PM'
        },
        {
            imagen: 'https://th.bing.com/th/id/OIP.Lx6jNuMBRS7pWyIPxEBw6gHaED?rs=1&pid=ImgDetMain',
            nombre: 'Nombre7',
            descripcion: 'Descripción 2',
            pais: 'País2',
            hora: '12:30 PM'
        },
    ];
    const [currentPage, setPage] = useState(1);
    const itemsPerPage = 4; // Define la cantidad de elementos por página

    const handleClickNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const paginatedData = arregloDatos.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    return (
<div>
    <table className="min-w-full bg-black border border-gray-300 shadow-md rounded-md overflow-hidden">
        <tbody>
            {paginatedData.map((item, index) => (
                <tr key={index}>
                    <td className="py-2 px-4">
                        <div className="flex items-center">
                            <img
                                src={item.imagen}
                                alt="Imagen de la persona"
                                className="w-10 h-10 rounded-full mr-2"
                            />
                            <div>
                                <p className="mb-1 pt-4 text-white text-sm">{item.nombre} </p>
                                <p className="text-xs text-white">{item.descripcion}</p>
                            </div>
                        </div>
                    </td>
                    <td className="py-2 px-4 text-xs">
                        <div>
                            <p className="mb-1 text-sm text-white">{item.pais} </p>
                            <p className="text-xs text-white">{item.hora}</p>
                        </div>
                    </td>
                    <td className="py-2 px-4 text-xs">
                        <div>
                            <button className="bg-orange-500 rounded-full px-4 py-2 text-white">
                                Detalles
                            </button>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>

    <div className="mt-4 flex justify-center"> {/* Cambio aquí: justify-center */}
        <button
            className="bg-blue-500 rounded-full px-4 py-2 text-white"
            onClick={handleClickNextPage}
        >
            Siguiente Página
        </button>
    </div>
</div>


    );





}

export default Table
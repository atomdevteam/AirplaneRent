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
        setPage((prevPage) => Math.max(prevPage - Math.ceil(arregloDatos.length / itemsPerPage), Math.ceil(arregloDatos.length / itemsPerPage)));;
    };

    const handleClickPrevPage = () => {
        setPage((prevPage) => Math.max(prevPage - 1, 1)); // No permitir ir a una página menor a 1
    };

    const paginatedData = arregloDatos.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const totalPages = Math.ceil(arregloDatos.length / itemsPerPage);
const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

const handlePageClick = (page) => {
    setPage(page);
};
   

    return (
        <div className='bg-black'>
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


            <div className="mt-4 flex justify-center items-center">
                <button
                    className="bg-black rounded-full px-4 py-2 text-white"
                    onClick={handleClickPrevPage}
                >
                    &#9666;
                </button>
                <div className="flex items-center text-white">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            className={`mx-2 ${currentPage === index + 1
                                    ? 'bg-orange-500'
                                    : 'bg-black'
                                } rounded-full px-4 py-2 text-white`}
                            onClick={() => handlePageClick(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
                <button
                    className="bg-black rounded-full px-4 py-2 text-white"
                    onClick={handleClickNextPage}
                >
                    &#9656;
                </button>
            </div>


        </div>


    );





}

export default Table
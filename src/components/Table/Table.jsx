import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar';
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
        {
            imagen: 'https://th.bing.com/th/id/OIP.Lx6jNuMBRS7pWyIPxEBw6gHaED?rs=1&pid=ImgDetMain',
            nombre: 'Nombre8',
            descripcion: 'Descripción 2',
            pais: 'País2',
            hora: '12:30 PM'
        },
        {
            imagen: 'https://th.bing.com/th/id/OIP.Lx6jNuMBRS7pWyIPxEBw6gHaED?rs=1&pid=ImgDetMain',
            nombre: 'Nombre9',
            descripcion: 'Descripción 2',
            pais: 'País2',
            hora: '12:30 PM'
        },
        {
            imagen: 'https://th.bing.com/th/id/OIP.Lx6jNuMBRS7pWyIPxEBw6gHaED?rs=1&pid=ImgDetMain',
            nombre: 'Nombre10',
            descripcion: 'Descripción 2',
            pais: 'País2',
            hora: '12:30 PM'
        },
        {
            imagen: 'https://th.bing.com/th/id/OIP.Lx6jNuMBRS7pWyIPxEBw6gHaED?rs=1&pid=ImgDetMain',
            nombre: 'Nombre11',
            descripcion: 'Descripción 2',
            pais: 'País2',
            hora: '12:30 PM'
        },
        {
            imagen: 'https://th.bing.com/th/id/OIP.Lx6jNuMBRS7pWyIPxEBw6gHaED?rs=1&pid=ImgDetMain',
            nombre: 'Nombre12',
            descripcion: 'Descripción 2',
            pais: 'País2',
            hora: '12:30 PM'
        },
        {
            imagen: 'https://th.bing.com/th/id/OIP.Lx6jNuMBRS7pWyIPxEBw6gHaED?rs=1&pid=ImgDetMain',
            nombre: 'Nombre13',
            descripcion: 'Descripción 2',
            pais: 'País2',
            hora: '12:30 PM'
        },
        {
            imagen: 'https://th.bing.com/th/id/OIP.Lx6jNuMBRS7pWyIPxEBw6gHaED?rs=1&pid=ImgDetMain',
            nombre: 'Nombre14',
            descripcion: 'Descripción 2',
            pais: 'País2',
            hora: '12:30 PM'
        },
        {
            imagen: 'https://th.bing.com/th/id/OIP.Lx6jNuMBRS7pWyIPxEBw6gHaED?rs=1&pid=ImgDetMain',
            nombre: 'Nombre15',
            descripcion: 'Descripción 2',
            pais: 'País2',
            hora: '12:30 PM'
        },
        {
            imagen: 'https://th.bing.com/th/id/OIP.Lx6jNuMBRS7pWyIPxEBw6gHaED?rs=1&pid=ImgDetMain',
            nombre: 'Nombre16',
            descripcion: 'Descripción 2',
            pais: 'País2',
            hora: '12:30 PM'
        },
        {
            imagen: 'https://th.bing.com/th/id/OIP.Lx6jNuMBRS7pWyIPxEBw6gHaED?rs=1&pid=ImgDetMain',
            nombre: 'Nombre17',
            descripcion: 'Descripción 2',
            pais: 'País2',
            hora: '12:30 PM'
        },
    ];
    const [currentPage, setPage] = useState(1);
    const itemsPerPage = 7; // Define la cantidad de elementos por página

    const handleClickNextPage = () => {
        setPage((prevPage) => Math.min(prevPage + 1, Math.ceil(arregloDatos.length / itemsPerPage)));
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
        <>
            <Navbar></Navbar>
            <div className='bg-black h-creen mx-8 mb-12'>
                <h1 className="text-2xl pt-6  text-white mb-4">Aircrafts</h1>
                <div className='flex flex-row justify-between'>
                    <h6 className="text-1xl text-gray-300 mb-4">5 Aircrafts</h6>
                    <div className='text-gray-300 flex items-center mr-8'>Filter</div>
                </div>
                <div className='border-b-2 border-b-gray-700'></div>
                <table className="min-w-full bg-black border border-b-gray-700 shadow-md rounded-md overflow-hidden">
                    <tbody>
                        {paginatedData.map((item, index) => (
                            <tr key={index} className='border-b-2 border-b-gray-700'>
                                <td className="py-2 px-4">
                                    <div className="flex items-center ">
                                        <img
                                            src={item.imagen}
                                            alt="Imagen de la persona"
                                            className="w-10 h-10 rounded-full mr-2"
                                        />
                                        <div className=''>
                                            <p className="mb-1 pt-2 text-white text-sm">{item.nombre} </p>
                                            <p className="text-xs text-gray-400">{item.descripcion}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-2 px-4 text-xs flex justify-between"> {/* Añadida la clase flex y justify-between */}
                                    <div className='mb-4 mt-4'>
                                        <p className="mb-1 text-sm text-white">{item.pais} </p>
                                        <p className="text-xs text-gray-400">{item.hora}</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <button className="bg-orange-400 rounded-full px-4 py-2 text-white">
                                            Detalles
                                        </button>
                                    </div>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>


                <div className="mt-4 flex justify-center items-center text-white">
                    <button className="bg-black text-white p-1" onClick={handleClickPrevPage}>&#9666;</button>

                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            className={`mx-1 ${currentPage === index + 1 ? 'bg-orange-400' : 'bg-black'} rounded-full px-3 py-1`}
                            onClick={() => handlePageClick(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}

                    <button className="bg-black rounded-full p-1" onClick={handleClickNextPage}>
                        &#9656;
                        </button>
                </div>
            </div>
        </>

    );
}

export default Table
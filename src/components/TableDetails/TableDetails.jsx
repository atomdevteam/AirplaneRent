import React, { useState, useEffect } from 'react'
import { IoIosArrowForward } from "react-icons/io";
function TableDetails() {
    var arregloDatos = [
        {
            imagen: 'https://th.bing.com/th/id/OIP.Lx6jNuMBRS7pWyIPxEBw6gHaED?rs=1&pid=ImgDetMain',
            nombre: 'Maintenance Schedule',
            descripcion: '20',
            pais: 'País1',
            hora: '10:00 AM'
        },
        {
            imagen: 'https://th.bing.com/th/id/OIP.Lx6jNuMBRS7pWyIPxEBw6gHaED?rs=1&pid=ImgDetMain',
            nombre: 'Flight',
            descripcion: '15',
            pais: 'País2',
            hora: '12:30 PM'
        },
        {
            imagen: 'https://th.bing.com/th/id/OIP.Lx6jNuMBRS7pWyIPxEBw6gHaED?rs=1&pid=ImgDetMain',
            nombre: '5 Reserves',
            descripcion: 'Weather',
            pais: 'País1',
            hora: '10:00 AM'
        },
        {
            imagen: 'https://th.bing.com/th/id/OIP.Lx6jNuMBRS7pWyIPxEBw6gHaED?rs=1&pid=ImgDetMain',
            nombre: 'Airport',
            descripcion: '8 Reserves',
            pais: 'País2',
            hora: '12:30 PM'
        },
        {
            imagen: 'https://th.bing.com/th/id/OIP.Lx6jNuMBRS7pWyIPxEBw6gHaED?rs=1&pid=ImgDetMain',
            nombre: 'Treavel',
            descripcion: '3 Reserves',
            pais: 'País1',
            hora: '10:00 AM'
        },
        {
            imagen: 'https://th.bing.com/th/id/OIP.Lx6jNuMBRS7pWyIPxEBw6gHaED?rs=1&pid=ImgDetMain',
            nombre: 'Fuel Reserves',
            descripcion: '4 Reserves',
            pais: 'País2',
            hora: '12:30 PM'
        },
        

    ];
    const [currentPage, setPage] = useState(1);
    const itemsPerPage = 9; // Define la cantidad de elementos por página

    const handleClickNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const paginatedData = arregloDatos.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    return (
        <div>
            <div>
                {/* bg-black border border-gray-300 shadow-md rounded-md overflow-hidden */}
                <table className="w-full mb-8 h-auto">
                    <thead className=''>
                        <tr className='flex justify-between mx-4'>
                            <th className="py-2 px-4 text-left text-white">Reserves</th>
                            <th className="py-2 px-4 text-left text-white ">Add Airchaft</th>
                            <th className="py-2 px-4 text-left text-white">Profile</th>
                        </tr>
                    </thead>
                    <div className='border-gray-700 border-b-2 mx-12'></div>
                    <tbody>
                        {paginatedData.map((item, index) => (
                            <tr key={index} className='flex justify-between mx-4'>
                                <td className="py-2 px-4">
                                    <div className="flex items-center">
                                        <img
                                            src={item.imagen}
                                            alt="Imagen de la persona"
                                            className="w-10 h-10 rounded-full mr-2"
                                        />
                                        <div>
                                            <p className="mb-1 pt-4 text-white text-sm">{item.nombre}</p>
                                            <p className="text-xs text-white">{item.descripcion}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="">
                                    {/* <div>
                                        <p className="mb-1 text-sm text-white">{item.pais}</p>
                                        <p className="text-xs text-white">{item.hora}</p>
                                    </div> */}
                                </td>
                                <td className="py-2 px-4 text-xs ">
                                    <div>
                                        <button className=" rounded-full px-4 py-2 text-white hover:bg-gray-600">
                                            <IoIosArrowForward size={30}></IoIosArrowForward>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* <table className="w-full bg-black border border-gray-300 shadow-md rounded-md overflow-hidden">
                <thead>
                    <tr>
                        <th className="py-2 px-4 text-left text-white">Reserves</th>
                        <th className="py-2 px-4 text-left text-white">Add Airchaft</th>
                        <th className="py-2 px-4 text-left text-white">Profile</th>
                    </tr>
                </thead>
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
                                        <p className="mb-1 pt-4 text-white text-sm">{item.nombre}</p>
                                        <p className="text-xs text-white">{item.descripcion}</p>
                                    </div>
                                </div>
                            </td>
                            <td className="py-2 px-4 text-xs">
                                <div>
                                    <p className="mb-1 text-sm text-white">{item.pais}</p>
                        <p className="text-xs text-white">{item.hora}</p>
                                </div>
                            </td>
                            <td className="py-2 px-4 text-xs">
                                <div>
                                    <button className=" rounded-full px-4 py-2 text-white">
                                        <IoIosArrowForward size={30}></IoIosArrowForward>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> */}


        </div>


    );

}

export default TableDetails
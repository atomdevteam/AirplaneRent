import React, { useState, useEffect } from 'react'
import FilterBlock from '../FilterBlock/FilterBlock'
const datos = [
    {
        id: 1,
        imagen: "https://th.bing.com/th/id/R.865f5f7479be8a152bb09a1f4dcaa763?rik=GPa6XF9S4XB5Lw&pid=ImgRaw&r=0",
        nombre: "Ferrary",
        descripcion: "caro",
        hora: "10:00 AM",
    },
    {
        id: 2,
        imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
        nombre: "Bugati",
        descripcion: "super caroaaaaaaaaaa",
        hora: "02:30 PM",
    },
    {
        id: 3,
        imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
        nombre: "Bugati",
        descripcion: "super caroaaaaaaaaaaaasssssss",
        hora: "02:30 PM",
    },
    {
        id: 4,
        imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
        nombre: "Bugati",
        descripcion: "super carosssssssssssssssssssssssssssssssssssss",
        hora: "02:30 PM",
    },
    {
        id: 5,
        imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
        nombre: "Bugati",
        descripcion: "super carosssssssssssssssssssssssssssssssssssss",
        hora: "02:30 PM",
    },
    {
        id: 6,
        imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
        nombre: "Bugati",
        descripcion: "super carosssssssssssssssssssssssssssssssssssss",
        hora: "02:30 PM",
    },
    {
        id: 7,
        imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
        nombre: "Bugati",
        descripcion: "super carosssssssssssssssssssssssssssssssssssss",
        hora: "02:30 PM",
    },
    {
        id: 8,
        imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
        nombre: "Bugati",
        descripcion: "super carosssssssssssssssssssssssssssssssssssss",
        hora: "1 hora ",
    },
    {
        id: 9,
        imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
        nombre: "Bugati",
        descripcion: "super carosssssssssssssssssssssssssssssssssssss",
        hora: "02:30 PM",
    },

    // Agrega más datos según sea necesario
];
function NotificationsBlock() {

    return (
        <div className="flex flex-row">
            <div className="flex-grow">
                <h1 className="text-4xl pt-16 font-bold text-white mb-4">Notificación</h1>
                <div className="flex pt-2 pb-20 h-screen">
                    <div className="w-full bg-gray-900 rounded-lg p-4 relative">
                        <div className="flex justify-between">
                            <h1 className="text-3xl font-bold text-white mb-4">New update</h1>
                            <input
                                type="text"
                                placeholder="Filter by date"
                                className="font-bold text-white mb-4 rounded-lg bg-gray-800 text-white outline-none"
                            />
                        </div>
                        <ul className="list-none" style={{ maxHeight: 'calc(4 * (6.5rem + 3.5rem) + 1.5rem)', overflowY: 'auto' }}>
                            {datos.map((item) => (
                                <li key={item.id} className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-4 mb-4">
                                    <img
                                        src={item.imagen}
                                        className="rounded-full h-12 w-12 lg:h-16 lg:w-16 object-cover mb-2 lg:mb-0 lg:mr-4"
                                    />
                                    <div className="flex flex-col flex-grow">
                                        <div className="flex justify-between">
                                            <div>
                                                <p className="text-lg text-white font-semibold">{item.nombre}</p>
                                                <p className="text-white">{item.descripcion}</p>
                                                {/* Letrero de Comentario */}
                                                <p className="text-gray-500 mt-2">Comentario</p>
                                            </div>
                                            <div className="flex items-center">
                                            <p className="text-white pr-2">{item.hora}</p>
                                                <div className="w-3 h-3  bg-orange-500 rounded-full mr-2"></div>
                                                
                                            </div>
                                        </div>
                                        {/* Botones Like y Reply */}
                                        <div className="flex mt-2 space-x-2">
                                            <button className="text-white">Like</button>
                                            <button className="text-white">Reply</button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='pt-36'>
                <FilterBlock></FilterBlock>
            </div>
        </div>





    )

}

export default NotificationsBlock
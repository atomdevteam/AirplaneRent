import React from 'react'
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io'
import { FaHeart } from "react-icons/fa6"
import { IoMdAddCircle } from "react-icons/io";
import cabin from '../../assets/cabin.jpg'
import card2 from "../../assets/card2.jpg"
import card3 from "../../assets/card3.jpg"
import card4 from "../../assets/card4.jpg"
import card5 from "../../assets/card5.jpg"

let Myaircrafts = [

]

const MyAircrafts = () => {
    return (
        <div className='m-12'>
            <div className='text-white mt-8 mb-12'>
                <h1 className='text-4xl ml-8'>My Aircrafts</h1>
            </div>
            <div className=''>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                    {/* Crear un Componente que se llame AircraftsCard y dentro del Map los datos agregalos en un variable
                        de tipo de areglo por ejemplo: let MyAircrafts = [
                            {id: 1, image: card2, nome: "Luxury Jet 50", tipo: "Private Jet", precioH: "5000/hour"},
                        ] crear 5 items para los cARD
                    */}

                    {/* Copiar este codigo y llevarlo al Card y pasarle los datos por parametro, desde aqui */}
                    <div className="bg-[#2c2c2c] relative  rounded-2xl  p-4">
                        <img src={card2} alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />

                        <button className='bg-white text-black p-1 rounded-full absolute top-0 right-0 m-6'><FaHeart /></button>
                        <div className="px-1 py-4">
                            <div className="text-white">Luxury Jet 50</div>
                            <p className="text-gray-400 text-base">
                                Private Jet
                            </p>
                        </div>
                        <div className="px-1 flex items-center justify-between">
                            <span className='text-white'>from $5000/hour</span>
                            <button className=''>< IoIosArrowForward className="text-sm text-gray-500" size={15} color='white' /></button>
                        </div>
                    </div>
                    {/* Hasta aqui */}

                    {/* Borra desde aqui */}

                    <div className="bg-[#2c2c2c] relative  rounded-2xl  p-4">
                        <img src={cabin} alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
                        <button className='bg-white text-black p-1 rounded-full absolute top-0 right-0 m-6'><FaHeart /></button>
                        <div className="px-1 py-4">
                            <div className="text-white">Luxury Jet 50</div>
                            <p className="text-gray-400 text-base">
                                Private Jet
                            </p>
                        </div>
                        <div className="px-1 flex items-center justify-between">
                            <span className='text-white'>from $5000/hour</span>
                            <button className=''>< IoIosArrowForward className="text-sm text-gray-500" size={15} color='white' /></button>
                        </div>


                    </div>
                    <div className="bg-[#2c2c2c] relative  rounded-2xl  p-4">
                        <img src={card4} alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
                        <button className='bg-white text-black p-1 rounded-full absolute top-0 right-0 m-6'><FaHeart /></button>
                        <div className="px-1 py-4">
                            <div className="text-white">Luxury Jet 50</div>
                            <p className="text-gray-400 text-base">
                                Private Jet
                            </p>
                        </div>
                        <div className="px-1 flex items-center justify-between">
                            <span className='text-white'>from $5000/hour</span>
                            <button className=''>< IoIosArrowForward className="text-sm text-gray-500" size={15} color='white' /></button>
                        </div>
                    </div>
                    <div className="bg-[#2c2c2c] relative  rounded-2xl  p-4">
                        <img src={card3} alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
                        <button className='bg-white text-black p-1 rounded-full absolute top-0 right-0 m-6'><FaHeart /></button>
                        <div className="px-1 py-4">
                            <div className="text-white">Luxury Jet 50</div>
                            <p className="text-gray-400 text-base">
                                Private Jet
                            </p>
                        </div>
                        <div className="px-1 flex items-center justify-between">
                            <span className='text-white'>from $5000/hour</span>
                            <button className=''>< IoIosArrowForward className="text-sm text-gray-500" size={15} color='white' /></button>
                        </div>
                    </div>
                    <div className="bg-[#2c2c2c] relative  rounded-2xl  p-4">
                        <img src={card5} alt="Placeholder Image" className="w-full h-48 rounded-md object-cover" />
                        <button className='bg-white text-black p-1 rounded-full absolute top-0 right-0 m-6'><FaHeart /></button>
                        <div className="px-1 py-4">
                            <div className="text-white">Luxury Jet 50</div>
                            <p className="text-gray-400 text-base">
                                Private Jet
                            </p>
                        </div>
                        <div className="px-1 flex items-center justify-between">
                            <span className='text-white'>from $5000/hour</span>
                            <button className=''>< IoIosArrowForward className="text-sm text-gray-500" size={15} color='white' /></button>
                        </div>
                    </div>
                    {/* Hasta aqui */}

                    {/* Add Aircrafts "Esto no va en el map" */}
                    <div className="bg-[#2c2c2c] relative rounded-2xl p-4">
                        <Link to='/airdetails' className='w-full h-48 rounded-md object-cover bg-gray-400 flex items-center justify-center'>
                            <IoMdAddCircle size={90} />
                        </Link>

                        <div className="px-1 py-4">
                            <div className="text-white">Add Aircrafts</div>
                        </div>

                        <div className="px-1 m-2 absolute bottom-0 right-0">
                            <button className=''><IoIosArrowForward className="text-sm text-gray-500" size={15} color='white' /></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MyAircrafts
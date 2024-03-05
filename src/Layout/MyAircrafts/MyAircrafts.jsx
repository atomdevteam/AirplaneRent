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
import AircraftsCards from '../components/AircraftsCards';
// Cambie la A por a porque asi se llama el Layout
// Ahora map esa variable
let Myaircrafts = [
    { id: 1, image: cabin, name: "Luxury Jet 50", tipo: "Private Jet", precioH: "5000/hour" },
    { id: 2, image: card2, name: "Luxury Jet 50", tipo: "Private Jet", precioH: "5000/hour" },
    { id: 3, image: card3, name: "Luxury Jet 50", tipo: "Private Jet", precioH: "5000/hour" },
    { id: 4, image: card4, name: "Luxury Jet 50", tipo: "Private Jet", precioH: "5000/hour" },
    { id: 5, image: card5, name: "Luxury Jet 50", tipo: "Private Jet", precioH: "5000/hour" },
]


const MyAircrafts = () => {
    return (
        <div className='m-12'>
            <div className='text-white mt-8 mb-12'>
                <h1 className='text-4xl ml-8'>My Aircrafts</h1>
            </div>
            <div className=''>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                   
                    {Myaircrafts.map((data, index) => (
                        <div key={index}>
                            <AircraftsCards name={data.name} tipo={data.tipo} image={data.image} precioH = {data.precioH} />
                        </div>
                    ))}
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
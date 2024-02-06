import React from 'react';
import card1 from '../../assets/card1.jpg';

const PopularDestinations = () => {
    return (
        <div className='mt-[4rem] mb-[1rem] p-4'>
            {/* <div className="text-white mb-[1rem]">
                Popular destinations
            </div> */}
            <div className=" flex items-center justify-center">
                <div className="container">
                    <div className="text-white mb-[1rem]">
                        Popular destinations
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">

                        <div className="max-w-md relative">
                            <img className="w-full h-[18rem] object-cover rounded-md" src={card1} alt="Card 1" />
                            <button className='bg-white text-black text-sm p-1 rounded-full absolute bottom-0 left-0  m-2'>Samana</button>
                         
                        </div>

                        <div className='flex flex-col'>
                            <div className="max-w-md relative">
                                <img className="w-full h-[8rem] object-cover rounded-md" src={card1} alt="Card 1" />
                                <button className='bg-white text-black text-sm p-1 rounded-full absolute bottom-0 left-0  m-2'> Puerto Plata</button>
                              
                            </div>
                            <div className="max-w-md relative mt-[2rem]">
                                <img className="w-full h-[8rem] object-cover rounded-md" src={card1} alt="Card 1" />
                                <button className='bg-white text-black text-sm p-1 rounded-full absolute bottom-0 left-0  m-2'>Santiago</button>
                              
                            </div>
                        </div>

                        <div className="max-w-md relative">
                            <img className="w-full h-[18rem] object-cover rounded-md" src={card1} alt="Card 1" />
                            <button className='bg-white text-black text-sm p-1 rounded-full absolute bottom-0 left-0  m-2'>Punta Cana</button>
                         
                        </div>

                        <div className='flex flex-col'>
                            <div className="max-w-md relative">
                                <img className="w-full h-[8rem] object-cover rounded-md" src={card1} alt="Card 1" />
                                <button className='bg-white text-black text-sm p-1 rounded-full absolute bottom-0 left-0  m-2'>Cabo Rojo</button>
                         
                            </div>
                            <div className="max-w-md relative mt-[2rem]">
                                <img className="w-full h-[8rem] object-cover rounded-md" src={card1} alt="Card 1" />
                                <button className='bg-white text-black text-sm p-1 rounded-full absolute bottom-0 left-0  m-2'>Santo Domingo</button>
                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularDestinations;

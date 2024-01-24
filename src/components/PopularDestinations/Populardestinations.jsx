import React from 'react';
import card1 from '../../assets/card1.jpg';

const PopularDestinations = () => {
    return (
        <div className='mt-[1rem] mb-[1rem]'>
            <div className="text-white">
                Popular destinations
            </div>
            {/* <div class="grid grid-cols-4  text-white space-x-8">
                <div className='max-w-md relative"'>
                    <img className="w-[15rem] h-[18rem] object-cover rounded-md" src={card1} alt="Card 1" />
                    <button className="bg-white text-black p-1 mx-1 my-1 rounded-full absolute bottom-0 left-0 ">
                        Botón Blanco
                    </button>
                </div>

                <div className='bg-[#2c2c2c]'>09</div>
                <div className='bg-[#2c2c2c]'>01</div>

                <div className='bg-[#2c2c2c]'>09</div>

            </div> */}
            {/*  flex justify-center mt-8 space-x-8 mx-12*/}
            <div className="grid grid-cols-4  text-white space-x-4">
          
                <div className="max-w-md relative">
                    <img className="w-[16rem] h-[18rem] object-cover rounded-md" src={card1} alt="Card 1" />
                    <button className="bg-white text-black p-1 mx-1 my-1 rounded-full absolute bottom-0 left-0 ">
                        Botón Blanco
                    </button>
                </div>
          
                <div className='flex flex-col'>
                    <div className="max-w-md relative">
                        <img className="w-[16rem] h-[8rem] object-cover rounded-md" src={card1} alt="Card 1" />
                        <button className="bg-white text-black p-1 mx-1 my-1 rounded-full absolute bottom-0 left-0 ">
                            Botón Blanco
                        </button>
                    </div>
                    <div className="max-w-md relative mt-[2rem]">
                        <img className="w-[16rem] h-[8rem] object-cover rounded-md" src={card1} alt="Card 1" />
                        <button className="bg-white text-black p-1 mx-1 my-1 rounded-full absolute bottom-0 left-0 ">
                            Botón Blanco
                        </button>
                    </div>
                </div>
                
                  <div className="max-w-md relative">
                    <img className="w-[16rem] h-[18rem] object-cover rounded-md" src={card1} alt="Card 1" />
                    <button className="bg-white text-black p-1 mx-1 my-1 rounded-full absolute bottom-0 left-0 ">
                        Botón Blanco
                    </button>
                </div>
               
                  <div className='flex flex-col'>
                    <div className="max-w-md relative">
                        <img className="w-[16rem] h-[8rem] object-cover rounded-md" src={card1} alt="Card 1" />
                        <button className="bg-white text-black p-1 mx-1 my-1 rounded-full absolute bottom-0 left-0 ">
                            Botón Blanco
                        </button>
                    </div>
                    <div className="max-w-md relative mt-[2rem]">
                        <img className="w-[16rem] h-[8rem] object-cover rounded-md" src={card1} alt="Card 1" />
                        <button className="bg-white text-black p-1 mx-1 my-1 rounded-full absolute bottom-0 left-0 ">
                            Botón Blanco
                        </button>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default PopularDestinations;

import React, { useState } from 'react';

const AircraftDetailsForm = () => {

    const [aircraftDetails, setAircraftDetails] = useState({
        title: '',
        description: '',
        features: ['', '', '', ''],
    });

    const handleChange = (e, index) => {
        const { name, value } = e.target;

        if (name.startsWith('features')) {
            setAircraftDetails((prevDetails) => {
                const newFeatures = [...prevDetails.features];
                newFeatures[index] = value;
                return { ...prevDetails, features: newFeatures };
            });
        } else {
            setAircraftDetails((prevDetails) => ({
                ...prevDetails,
                [name]: value,
            }));
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();


        if (
            aircraftDetails.title.trim() === '' ||
            aircraftDetails.description.trim() === '' ||
            aircraftDetails.features.some((feature) => feature.trim() === '')
        ) {

            console.log('Please complete all fields.');
            return;
        }

        console.log('Saved data:', aircraftDetails);
    };


    return (
        <div className='mt-[2rem]'>
            <div className='bg-[#2c2c2c] rounded-xl mr-6  h-full'>
                <div className='flex flex-col mt-2 ml-[1rem]'>
                    <h1 className='text-white mt-4'>Aircraft Details</h1>
                    <span className='text-gray-500 mt-[1rem] text-xs'></span>
                    <div className="container mx-auto mt-8">
                        <form className='grid gap-y-4 mx-4' onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-bold ml-1 mb-2 text-white">Aircraft Title</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="title"
                                        value={aircraftDetails.title}
                                        onChange={handleChange}
                                        placeholder="Enter aircraft name"
                                        className="py-3 px-4 block w-full  text-white text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm bg-transparent border-b border-black rounded-full"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold ml-1 mb-2 text-white">Aircraft Descriptions</label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="description"
                                        value={aircraftDetails.description}
                                        onChange={handleChange}
                                        placeholder="Enter aircraft description"
                                        className="py-3 px-4 block w-full text-white text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm bg-transparent border-b border-black rounded-full"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold ml-1 mb-2 text-white">Aircraft Features</label>
                                <div className="relative">
                                    <div className="grid grid-rows-2 grid-flow-col gap-2">
                                        {aircraftDetails.features.map((feature, index) => (
                                            <input
                                                key={index}
                                                type="text"
                                                name={`features[${index}]`}
                                                value={feature}
                                                onChange={(e) => handleChange(e, index)}
                                                placeholder={`Feature ${index + 1}`}
                                                className="py-3 px-4 block w-full text-white text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm bg-transparent border-b border-black rounded-full"
                                            />
                                        ))}

                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='my-8'>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AircraftDetailsForm;

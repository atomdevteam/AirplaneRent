import React, { useState, useEffect } from 'react'
import { FaHandPaper } from "react-icons/fa";
function ProfileSettings() {
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

        <div className='flex flex-row pl-20'>
            <div className='mt-[2rem]'>
                <div className='bg-[#2c2c2c] rounded-xl mr-6 h-full'>
                    <div className='flex flex-col mt-2 ml-[1rem]'>
                        <h1 className='text-white mt-4'>Profile information</h1>
                        <div className='flex items-center mt-4 pl-6'>
                            <img
                                src='https://th.bing.com/th/id/R.abb5e2f3a89fe5f1871d9e13555a4cfb?rik=Gw6033iUygmZPQ&riu=http%3a%2f%2fcdn.marketing4ecommerce.net%2fwp-content%2fuploads%2f2017%2f01%2f02204956%2fqu%c3%a9-es-una-imagen-vectorial.jpg&ehk=HTmTsIAUN71R1e1kAp3MB6q0dm57GQVLk2TwmRfmuds%3d&risl=&pid=ImgRaw&r=0'
                                alt='Profile'
                                className='rounded-full h-28 w-28 mr-4'
                            />
                            <div className='flex justify-start pl-2'>
                                <button className='bg-[#0d7ca8] text-white py-2 px-4 bg-orange-500 rounded-lg mr-8'>Upload new profile picture</button>
                                <button className='bg-[#0d7ca8] text-black py-2 px-4 bg-white  rounded-lg ml-8 mr-2'>Remove picture</button>
                            </div>
                            <button className='bg-[#0d7ca8] text-white bg-orange-500 py-2 px-4 rounded-lg ml-auto mr-6'>Save</button>
                        </div>
                        <span className='text-gray-500 mt-[1rem] text-xs'></span>
                        <div className='container mx-auto mt-8'>
                            <form className='grid gap-y-4 mx-4' onSubmit={handleSubmit}>
                                <div>
                                    <label className='block text-sm font-bold ml-1 mb-2 text-white'>Full name</label>
                                    <div className='relative'>
                                        <input
                                            type='text'
                                            name='title'
                                            value={aircraftDetails.title}
                                            onChange={handleChange}
                                            placeholder='Your full name'
                                            className='py-3 px-4 block w-full text-white text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm bg-transparent border-b border-black rounded-full'
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className='block text-sm font-bold ml-1 mb-2 text-white'>Email</label>
                                    <div className='relative'>
                                        <input
                                            type='text'
                                            name='description'
                                            value={aircraftDetails.description}
                                            onChange={handleChange}
                                            placeholder='Your email address'
                                            className='py-3 px-4 block w-full text-white text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm bg-transparent border-b border-black rounded-full'
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className='block text-sm font-bold ml-1 mb-2 text-white'>Location</label>
                                    <div className='relative'>
                                        <input
                                            type='text'
                                            name='description'
                                            value={aircraftDetails.description}
                                            onChange={handleChange}
                                            placeholder='Your location'
                                            className='py-3 px-4 block w-full text-white text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm bg-transparent border-b border-black rounded-full'
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className='block text-sm font-bold ml-1 mb-2 text-white'>Nationality</label>
                                    <div className='relative'>
                                        <input
                                            type='text'
                                            name='description'
                                            value={aircraftDetails.description}
                                            onChange={handleChange}
                                            placeholder='American'
                                            className='py-3 px-4 block w-full text-white text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm bg-transparent border-b border-black rounded-full'
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className='block text-sm font-bold ml-1 mb-2 text-white'>Date Of Birth</label>
                                    <div className='relative'>
                                        <input
                                            type='text'
                                            name='description'
                                            value={aircraftDetails.description}
                                            onChange={handleChange}
                                            placeholder='01/01/1990'
                                            className='py-3 px-4 block w-full text-white text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm bg-transparent border-b border-black rounded-full'
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className='block text-sm font-bold ml-1 mb-2 text-white'>Bio</label>
                                    <div className='relative'>
                                        <input
                                            type='text'
                                            name='description'
                                            value={aircraftDetails.description}
                                            onChange={handleChange}
                                            placeholder='Tell us about yourself'
                                            className='py-3 px-4 block w-full text-white text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm bg-transparent border-b border-black rounded-full'
                                        />
                                    </div>
                                </div>
                                <div className="rounded-lg bg-[#2C2C2C] p-4">
                                    <div className="flex flex-col sm:flex-row">
                                        <div className="mb-6 sm:mb-0">
                                            <h1 className="text-xl font-bold text-white mb-4">Logbook</h1>
                                            <Card imagen={"https://imgv2-2-f.scribdassets.com/img/document/374883636/original/6640e45e4a/1604851331?v=1"} />
                                        </div>
                                        <div className="pl-4 sm:pl-10">
                                            <h1 className="text-xl font-bold text-white mb-4">Licence</h1>
                                            <Card imagen={"https://th.bing.com/th/id/R.3310e2cbafdad69a3ba763b96f3b2f77?rik=IHyFU810gVG%2b%2fA&pid=ImgRaw&r=0"} />
                                        </div>
                                        <div className="pl-4 sm:pl-10">
                                            <h1 className="text-xl font-bold text-white mb-4">Medical Certificate</h1>
                                            <Card imagen={"https://th.bing.com/th/id/OIP.XKCn6qtMi4AAusMjT3mTdAHaFL?rs=1&pid=ImgDetMain"} />
                                        </div>
                                    </div>
                                </div>
                                <label className='block text-lg lg:text-xl font-bold ml-1 mb-2 text-white'>Login settings</label>

                                <div>
                                    <label className='block text-sm font-bold ml-1 mb-2 text-white'>Old password</label>
                                    <div className='relative'>
                                        <input
                                            type='text'
                                            name='title'
                                            value={aircraftDetails.title}
                                            onChange={handleChange}
                                            placeholder='Enter your old password'
                                            className='py-3 px-4 block w-full text-white text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm bg-transparent border-b border-black rounded-full'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-row'>
                                    <div>
                                        <label className='block text-sm font-bold ml-1 mb-2 text-white'>New password</label>
                                        <div className='relative'>
                                            <input
                                                type='text'
                                                name='title'
                                                value={aircraftDetails.title}
                                                onChange={handleChange}
                                                placeholder='Enter your new password'
                                                className='py-3 px-4 block w-full text-white text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm bg-transparent border-b border-black rounded-full'
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className='block text-sm font-bold ml-10 mb-2 text-white'>Confirm new password</label>
                                        <div className='relative'>
                                            <input
                                                type='text'
                                                name='title'
                                                value={aircraftDetails.title}
                                                onChange={handleChange}
                                                placeholder='Confirm your new password'
                                                className='py-3 px-4 block w-full text-white text-sm  ml-10 focus:border-blue-500 focus:ring-blue-500 shadow-sm bg-transparent border-b border-black rounded-full'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='my-8'>
                                        <button
                                            type='submit'
                                            className=' bg-white py-3 px-6 font-sans text-xs font-bold uppercase text-black rounded-lg shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                                        >
                                            Update password
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-[18rem]'>
                <ActionButtons />
            </div>

        </div>
    );
}


const Card = ({ imagen }) => {
    const [image, setimage] = useState(null);

    const handlechangeImg = (e) => {
        const selectedImage = e.target.files[0];
        console.log("Image select")
        console.log(selectedImage)
    };


    const [selectedOption, setSelectedOption] = useState('');

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

    return (
        <div className="m-2 p-4 bg-black rounded-lg border border-orange-500 max-w-md">
            <div className='flex items-center justify-center'>
                <div className='flex items-center justify-center w-full max-w-md h-48 bg-black rounded-lg'>
                    <label htmlFor="file-upload" className="px-3 py-2 text-right text-xs leading-4">
                        <div className="bg-white text-black px-4 py-2 rounded-full mb-6 max-w-md text-center cursor-pointer">
                            <input id="file-upload" type="file" onChange={handlechangeImg} className="hidden" />
                            <span className=''>
                                Click or Draw Image
                            </span>
                        </div>
                    </label>
                </div>
            </div>
        </div>

    );
};

const ActionButtons = () => {
    return (
        <div className='mt-10 flex justify-center'>
            <div className='bg-[#2c2c2c] rounded-xl px-8 py-6 shadow-md'>
                <div className='flex flex-col items-center'>
                    <div className="container mx-auto text-center">
                        <FaHandPaper color='white' size={50}></FaHandPaper>
                        <h1 className='text-white text-3xl font-bold mt-6 mb-4'>Exclusive Offer!</h1>
                        <p className='text-gray-300 mt-2 mb-6'>Join our Travel Club to receive secret offers and the best prices for amazing airplane rentals!</p>
                    </div>
                    <button className='bg-white text-gray-900 rounded-lg py-2 px-6 font-semibold shadow-md hover:bg-gray-200 transition duration-300'>Sign up now</button>
                </div>
            </div>
        </div>
    )
}


export default ProfileSettings
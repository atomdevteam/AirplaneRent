import React, { useState, useEffect } from 'react'

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

        <div className='flex flex-row'>
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
                                <div>
                                    <div className='my-8'>
                                        <button
                                            type='submit'
                                            className='w-full bg-[#0d7ca8] py-3 px-6 font-sans text-xs font-bold uppercase text-white rounded-lg shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                                        >
                                            Save
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
        <div className='mt-[2rem]'>
            <div className='bg-[#2c2c2c] rounded-xl   h-auto'>
                <div className='flex flex-col mt-2 '>
                    {/* <h1 className='text-white mt-4'>Aircraft Price</h1>
                    <span className='text-white mt-[1rem] text-lg'>Amount</span> */}
                    <div className="container mx-auto mt-8">
                        <div className='flex flex-col mx-8'>
                            <button className='bg-orange-400 mb-4 text-white rounded-full h-12 '>
                                Publish Now
                            </button>
                            <button className='bg-white mb-8 text-black rounded-full h-12'>
                                Schedule Aircraft
                            </button>
                            <button className='bg-transparent mb-8 text-white rounded-full h-12'>
                                Save Draft
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProfileSettings
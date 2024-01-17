import React, { useState } from 'react'
const CTA = () => {
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
        <div className='mt-[2rem]'>
            <div className='bg-[#2c2c2c] rounded-xl mr-6  h-[30rem]'>
                <div className='flex flex-col mt-2 ml-[1rem]'>
                    <h1 className='text-white mt-4'>Aircraft Images & CTA</h1>
                    <span className='text-white mt-[1rem] text-lg'>Cover Image</span>
                    <div className="container mx-auto mt-8">
                        <div className='flex items-center justify-center'>
                            <div className='flex items-center justify-center w-[45rem] h-[15rem] bg-black rounded-lg'>
                                <label htmlFor="file-upload" className="px-3 py-2 text-right  text-xs leading-4">
                                    <div className="bg-white text-black px-4 py-2 rounded-full mb-6 w-60 text-center cursor-pointer">
                                        <input id="file-upload" type="file" onChange={handlechangeImg} className="hidden" />
                                        <span className=''>
                                            Click or Draw Image
                                        </span>
                                    </div>
                                </label>
                            </div>
                        </div>


                    </div>
                    <div className=' mt-[1rem] mx-[0.5rem]'>
                        <div>
                            <label className="block text-sm font-bold ml-1 mb-2 text-white">Call to Action</label>
                            <div className="relative ">
                                <select
                                    name="title"
                                    value={selectedOption}
                                    onChange={(e) => setSelectedOption(e.target.value)}
                                    className="py-3 px-4 block w-full text-black text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm bg-transparent border-b border-black rounded-full"
                                  
                                >
                                    <option className='' value="" disabled>Select an option</option>
                                    {options.map((option) => (
                                        <option className='' key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default CTA
import React, {useState} from 'react'

const CTA = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const options = [
        { value: 'option1', label: 'Opción 1' },
        { value: 'option2', label: 'Opción 2' },
        { value: 'option3', label: 'Opción 3' },
    ];
    return (
        <div className='mt-[6rem]'>
            <div className='bg-[#2c2c2c] rounded-xl mr-6  h-[30rem]'>
                <div className='flex flex-col mt-2 ml-[1rem]'>
                    <h1 className='text-white mt-4'>Aircraft Images & CTA</h1>
                    <span className='text-white mt-[1rem] text-lg'>Cover Image</span>
                    <div className="container mx-auto mt-8">
                        <div className='flex items-center justify-center'>
                            <div className='flex items-center justify-center w-[45rem] h-[15rem] bg-black rounded-lg '>
                                <button className='bg-white text-black px-4 py-2 rounded-full mb-6 w-60'>
                                    Click or Drow Image
                                </button>
                            </div>
                        </div>

                    </div>
                    <span className='text-white mt-[1rem] text-lg'>Call to Action</span>
                    <div className="p-4">
                        <h1 className="text-2xl font-bold mb-4">Mi Aplicación con Select</h1>
                        <select
                            className="p-2 border rounded-md"
                            onChange={(e) => onChange(e.target.value)}
                            value={value}
                        >
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <p className="mt-4">Opción seleccionada: {selectedOption}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CTA
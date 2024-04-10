import { useState } from 'react'

const datos = [
    {
        id: 1,
        imagen: "https://th.bing.com/th/id/R.865f5f7479be8a152bb09a1f4dcaa763?rik=GPa6XF9S4XB5Lw&pid=ImgRaw&r=0",
        nombre: "Reservations update for Aicraft 1",
        descripcion: "on Reservation - 3600",
        descripcion2: "on Reservation update successfully",
        hora: "1 hour ago",
        isEnable: true,
    },
    {
        id: 2,
        imagen: "https://th.bing.com/th/id/OIP.AdEsTj8zQ5mzXdBPNetBtgHaEo?rs=1&pid=ImgDetMain",
        nombre: "Reservations update for Aicraft 2",
        descripcion: "on Reservation - 3600",
        descripcion2: "on Reservation update successfully",
        hora: "1 hour ago",
        isEnable: false,
    },

];
function Notifications() {

    const [selectedOption, setSelectedOption] = useState('');

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

    return (

        <div className=''>
            {/* <NavBar></NavBar> */}
            <div className='flex flex-row items-center justify-center h-screen '>

                <div className='w-[58rem]'>
                    <div className='-mt-[6rem] pl-10 mb-[1rem]'>

                        <div className='flex flex-col mb-4'>
                            <h1 className='text-white text-xl '>Manage Notifications</h1>
                            <span className='text-gray-300 mt-4'>View and Manage all notifications in one place</span>
                        </div>
                        <div className='bg-[#2c2c2c] rounded-xl mr-6  h-auto'>
                            <div className='flex flex-col mt-2 ml-[1rem]'>
                                <div className="flex justify-between mt-4">
                                    <h1 className='text-white text-xl mt-4'>New</h1>
                                    <select
                                        value={selectedOption}
                                        onChange={(e) => setSelectedOption(e.target.value)}
                                        className="py-3 px-4 mr-[2rem] block  text-white text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm bg-transparent border-b border-black rounded-full"
                                    >

                                        <option value="" disabled hidden>
                                            Filter by date
                                        </option >
                                        {options.map((option) => (
                                            <option className='text-black' key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>

                                </div>
                                <div className=' mt-[1rem] mx-[0.5rem]'>
                                    <ul className="list-none" >
                                        {datos.map((item) => (
                                            <div className=' pb-6' key={item.id}>

                                                <li key={item.id} className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-4 mb-4">
                                                    <img
                                                        src={item.imagen}
                                                        className=" rounded-full h-12 w-12 lg:h-16 lg:w-16 object-cover mb-4 lg:mb-0 lg:mr-4"
                                                    />
                                                    <div className="flex flex-col flex-grow ">
                                                        <div className="flex justify-between">
                                                            <div>
                                                                <p className="text-lg text-white">{item.nombre}</p>
                                                                <p className="text-gray-400">{item.descripcion}</p>

                                                                <p className="text-gray-400 mt-2">{item.descripcion2}</p>
                                                            </div>
                                                            <div className="flex items-center">
                                                                <p className="text-white pr-2">{item.hora}</p>
                                                                <div className="w-3 h-3  bg-orange-500 rounded-full mr-2"></div>

                                                            </div>
                                                        </div>
                                                        {item.isEnable === true ?
                                                            <div className="flex mt-2 space-x-2">
                                                                <button className="text-white">Like</button>
                                                                <button className="text-white">Reply</button>
                                                            </div> : <div className="flex mt-2 space-x-2">
                                                                <button className="text-white">Appro</button>
                                                                <button className="text-white">Reject</button>
                                                            </div>}

                                                    </div>

                                                </li>
                                                <div className='border-gray-500 border-b-2'></div>
                                            </div>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <Filter />
                </div>

            </div>
        </div>
    )

}

function Filter() {
    const checkboxLabels = ['Coments', 'Linkes', 'Reviews', 'Metions', 'Puchases', 'Menssages'];

    const [checkboxes, setCheckboxes] = useState(Array(checkboxLabels.length).fill(false));

    const handleCheckboxChange = (index) => {
        setCheckboxes((prevCheckboxes) => {
            const newCheckboxes = [...prevCheckboxes];
            newCheckboxes[index] = !newCheckboxes[index];
            return newCheckboxes;
        });
    };

    const handleSelectAll = () => {
        setCheckboxes(Array(checkboxLabels.length).fill(true));
    };

    const handleUnselectAll = () => {
        setCheckboxes(Array(checkboxLabels.length).fill(false));
    };

    return (
        <div className='-mt-[2rem]  mb-[1rem]'>
            <div className="original-container-style bg-[#2c2c2c] rounded-xl">
                <div className="p-4   ">
                    <div className="mb-4">
                        <label className="block mb-8 text-white">Filter Options:</label>
                        {checkboxLabels.map((label, index) => (
                            <div key={index} className="flex items-center mb-2 justify-between">
                                <span className="text-white mr-2 mb-2">{label}</span>
                                <label
                                    className="relative flex cursor-pointer items-center rounded-full "
                                    data-ripple-dark="true"
                                >
                                    <input
                                        type="checkbox"
                                        checked={checkboxes[index]}
                                        onChange={() => handleCheckboxChange(index)}
                                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-amber-500 checked:bg-amber-500 checked:before:bg-amber-500 "
                                    />
                                    <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-black opacity-0 transition-opacity peer-checked:opacity-100">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3.5 w-3.5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeWidth="1"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                </label>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between">
                        <button
                            onClick={handleSelectAll}
                            className="bg-white text-black px-4 py-2 mr-2 rounded-full hover:bg-gray-300"
                        >
                            Select All
                        </button>
                        <button
                            onClick={handleUnselectAll}
                            className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-300"
                        >
                            Unselect All
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Notifications
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContextAir } from '../../Context';

const LogIn = ({ isOpen, setIsOpen, setIsSignUp }) => {

    const { LogIn } = useContextAir()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const [isBackgroundBlurred, setIsBackgroundBlurred] = useState(false);
    const handlerLogIn = (e) => {
        e.preventDefault()

        console.log(email, password)
        if (!email || !password) {

            alert('Todos los campos son obligatorio!');
            return;
        } else {
            LogIn(email, password)
  
        }
    }

    const handleCloseModal = (e) => {
        e.preventDefault()
        setIsOpen(false)
        setIsBackgroundBlurred(false);
    }

    const handleOpenSignUp = (e) => {
        e.preventDefault()
        setIsOpen(false)
        setIsSignUp(true)
        setIsBackgroundBlurred(false);
    }

    return (
        <div className=''>
            {isOpen &&
                <div className='fixed inset-0 flex items-center justify-center z-50 mx-8 sm:mx-0' onClick={(e) => handleCloseModal(e)}>
                    <div className="min-h-screen w-full backdrop-blur-md flex flex-col justify-center sm:py-12">
                        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                            <div className="bg-white shadow w-full rounded-lg" onClick={(e) => e.stopPropagation()}>

                                <div className=' px-5 py-7 font-bold'>
                                    <div className='flex justify-between items-center '>
                                        <h2 className="text-2xl font-semibold">Log In with</h2>
                                        <button
                                            onClick={(e) => handleCloseModal(e)}
                                            className='text-gray-500 hover:text-gray-700 focus:outline-none'
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                            </svg>
                                        </button>
                                    </div>
                                    <hr className='w-80 border-b border-gray-300  mt-4' />

                                </div>
                                <form onSubmit={handlerLogIn}>
                                    <div className="px-5 py-4">
                                        <label className="font-bold text-xs text-gray-600 pb-1 block">EMAIL</label>
                                        <input
                                            type="email"
                                            placeholder='Email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="border px-3 py-2 mt-1 mb-5 text-sm w-full max-w-md shadow-lg"

                                        />
                                        <label className=" font-bold text-xs text-gray-600 pb-1 block">PASSWORD</label>
                                        <input
                                            type="password"
                                            placeholder='Password'
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            className="border px-3 py-2 mt-1 mb-5 text-sm w-full max-w-md shadow-lg"
                                        />
                                        <button
                                            type="submit"
                                            className="transition duration-200 bg-[#28318f] hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                            <span className="inline-block mr-2">LOG IN</span>

                                        </button>
                                    </div>
                                </form>

                                <div className="py-5">
                                    <div className="text-center text-xs">
                                        Don't you have an account yet? <button onClick={(e) => handleOpenSignUp(e)} className=" hover:underline transition-all underline ">Sign in</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default LogIn;
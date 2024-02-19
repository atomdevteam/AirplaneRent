import React, { useState } from 'react';
import { useContextAir } from '../Context';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify"

const Signln = ({ isOpen, setIsOpen, setIsLogIn }) => {

    const history = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { signup } = useContextAir();

    const signInHandler = (e) => {
        e.preventDefault();
        if (name && phonenumber && email && password && confirmPassword) {
            if (password.length >= 8) {
                if (password == confirmPassword) {
                    const datos = {
                        name: name,
                        phone: phonenumber,
                        email: email,
                        password: password
                    }
                    signup(datos)
                } else {
                    toast.error("Passwords Are Not Equal",
                        {
                            theme: "dark"
                        }
                    )

                }
            } else {
                toast.error("The password length cannot be less than 8",
                    {
                        theme: "dark"
                    }
                )

            }
        } else {
            toast.error("All fields are empty",
                {
                    theme: "dark"
                }
            )

        }

    };

    const handleCloseModal = (e) => {
        e.preventDefault()
        setIsOpen(false)
    }

    const handleOpenLogIn = (e) => {
        e.preventDefault()
        setIsOpen(false)
        setIsLogIn(true)
    }

    return (
        <div className={``}>
            {isOpen &&

                <div className='fixed inset-0 flex items-center justify-center z-50 mx-8 sm:mx-0 my-4 sm:my-0' onClick={handleCloseModal}>
                    <div className="min-h-screen w-full backdrop-blur-md flex flex-col justify-center sm:py-12">
                        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">

                            <div className="bg-white shadow w-full rounded-lg " onClick={(e) => e.stopPropagation()}>
                                <div className=' px-5 py-7 font-bold'>
                                    <div className='flex justify-between items-center '>
                                        <h2 className="text-2xl font-semibold">Sign in with</h2>
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

                                <div className="px-5">
                                    <label className="font-semibold text-sm text-gray-600 pb-1 block">NAME</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="border px-3 py-2 mt-1 mb-5 rounded-md text-sm w-full  shadow-md"
                                    />


                                    <label className="font-semibold text-sm text-gray-600 pb-1 block">PHONE NUMBER</label>
                                    <input
                                        type="text"
                                        value={phonenumber}
                                        onChange={(e) => setPhonenumber(e.target.value)}
                                        className="border px-3 py-2 mt-1 mb-5 text-sm w-full  shadow-md"
                                    />
                                    <label className="font-semibold text-sm rounded-md text-gray-600 pb-1 block ">EMAIL</label>
                                    <input
                                        type="text"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="border px-3 py-2 mt-1 rounded-md mb-5 text-sm w-full  shadow-md"
                                    />
                                    <label className="font-semibold text-sm text-gray-600 pb-1 block">PASSWORD</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="border px-3 py-2 mt-1 rounded-md mb-5 text-sm w-full  shadow-md"
                                    />
                                    <label className="font-semibold text-sm text-gray-600 pb-1 block">CONFIRM PASSWORD</label>
                                    <input
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="border px-3 py-2 mt-1 mb-5 text-sm w-full  rounded-md shadow-md"
                                    />
                                    <button
                                        type="button"
                                        className="transition duration-200 bg-blue-700 hover:bg-blue-500 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-md text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                                        onClick={signInHandler}
                                    >
                                        <span className="inline-block mr-2">Signln</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className="w-4 h-4 inline-block"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="py-5">

                                    <div className="text-center text-xs">
                                        Do you have an account?<button onClick={(e) => handleOpenLogIn(e)} to="/" className=" hover:underline transition-all underline ">Log in</button>
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

export default Signln;
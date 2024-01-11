import React, { useState } from 'react';
import { useContextAir } from '../Context';
import { toast } from "react-toastify"
const Signln = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { signup } =useContextAir();
    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    //     console.log(email)
    // };

    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value);
    //     console.log(password)
    // };
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
                    if (signup(datos)) {
                        toast.success("Successfully Saved Record", {
                            theme: "dark"
                        });
                    } else {
                        toast.error("Unable to save data", {
                            theme: "dark"
                        });
                    }
                    

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


    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
            
                <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                    <div className="py-3 flex flex-col items-center">
                        <label className="font-semibold text-lg text-gray-600 pb-2 block">Sign in with</label>
                    </div>

                    <div className="px-5 py-7">
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">NAME</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="border px-3 py-2 mt-1 mb-5 rounded-md text-sm w-full  shadow-md" // Puedes ajustar el color de fondo según tus preferencias
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
                        {/* <div className="grid grid-cols-2 gap-1">
                            <div className="text-center sm:text-left whitespace-nowrap">
                                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-4 h-4 inline-block align-text-top"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                    </svg>
                                    <span className="inline-block ml-1">Forgot Password</span>
                                </button>
                            </div>
                            <div className="text-center sm:text-right  whitespace-nowrap">
                                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-4 h-4 inline-block align-text-bottom	"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                    <span className="inline-block ml-1">Help</span>
                                </button>
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* <div className="py-5">
                    <div className="grid grid-cols-2 gap-1">
                        <div className="text-center sm:text-left whitespace-nowrap">
                            <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-4 h-4 inline-block align-text-top"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                <span className="inline-block ml-1">Back to your-app.com</span>
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Signln;
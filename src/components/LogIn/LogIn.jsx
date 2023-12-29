import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContextAir } from '../../Context';
const LogIn = () => {
    const { LogIn } = useContextAir()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handlerLogIn = (e) => {
        e.preventDefault()

        console.log(email, password)
        if (!email || !password) {
            // El campo de correo electrónico está vacío, se puede manejar el error aquí
            alert('Todos los campos son obligatorio!');
            return; // Detener la ejecución del formulario si el campo está vacío
        }else {
            LogIn(email, password)
        }
    }
    return (
        <div className=''>
            <div className="min-h-screen bg-[#000320] flex flex-col justify-center sm:py-12">
                <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                    <div className="bg-white shadow w-full rounded-lg">
                        <div className='flex flex-col items-center justify-center px-5 py-7 font-bold'>
                            <h3>Log In with</h3>
                            <hr className='w-80 border-b border-gray-300 mx-4 mt-4' />
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
                                Don't you have an account yet? <Link to="/Signln" className=" hover:underline transition-all underline ">Sign in</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;

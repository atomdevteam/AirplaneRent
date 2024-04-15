import { useState, useEffect } from 'react'
import { FaPlane } from "react-icons/fa"
import { FaHandPaper } from "react-icons/fa"
import { IoMdNotifications } from "react-icons/io"
import { FaUserCircle } from "react-icons/fa";
import { useContextAir } from '../../Context';
import { toast } from "react-toastify"
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function ProfileSettings() {
    const { user, InforPerfil, UploadImagePerfil, updatePerfil, UpdatePassword } = useContextAir()
    const [image, setimage] = useState(InforPerfil?.Logbook)
    const [imageLic, setimageLic] = useState(InforPerfil?.Licence)
    const [imageMedical, setimageMedical] = useState(InforPerfil?.MedicalCertificate)

    const [Picture, setPicture] = useState(InforPerfil?.Photo)
    const [PictureChange, setPictureChange] = useState(null)
    const [Perfil, setPerfil] = useState({
        Name: InforPerfil?.name,
        Email: InforPerfil?.email,
        Photo: Picture,
        Location: InforPerfil?.location,
        Nationality: InforPerfil?.nationality,
        Birthday: InforPerfil?.birthday,
        Bio: InforPerfil?.bio,
        Logbook: image,
        Licence: imageLic,
        MedicalCertificate: imageMedical
    })

    const handleChangePerfil = (e) => {
        const { name, value } = e.target;
        setPerfil(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const [LoginSetting, setLoginSetting] = useState({
        Oldpassword: '',
        Newpassword: '',
        Confirmpassword: '',
    })

    const handleChangeLoginSetting = (e) => {
        const { name, value } = e.target;
        setLoginSetting(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    const handlechangeImg = (e) => {
        const selectedImage = e.target.files[0];
        if (selectedImage) {
            const reader = new FileReader()
            reader.onload = function (e) {
                const imageUrl = e.target.result
                setPictureChange(imageUrl)
                UploadImagePerfil(selectedImage, InforPerfil.userId, setPicture)
            }
            reader.readAsDataURL(selectedImage)


        }
    }

    const handleDeleteIMg = () => {
        setPicture(null)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        Perfil.Logbook = image
        Perfil.Licence = imageLic,
            Perfil.MedicalCertificate = imageMedical
        Perfil.Photo = Picture
        if (
            Perfil.Name.trim() === '' ||
            Perfil.Email.trim() === '' ||
            Perfil.Photo === null ||
            Perfil.Location.trim() === '' ||
            Perfil.Nationality.trim() === '' ||
            Perfil.Birthday.trim() === '' ||
            Perfil.Bio.trim() === '' ||
            Perfil.Logbook === null ||
            Perfil.Licence === null ||
            Perfil.MedicalCertificate === null
        ) {
            console.log('Please fill out all fields.');
            return;
        } else {

            updatePerfil({
                ...InforPerfil,
                name: Perfil.Name,
                email: Perfil.Email,
                Photo: Perfil.Photo,
                location: Perfil.Location,
                nationality: Perfil.Nationality,
                birthday: Perfil.Birthday,
                bio: Perfil.Bio,
                Logbook: Perfil.Logbook,
                Licence: Perfil.Licence,
                MedicalCertificate: Perfil.MedicalCertificate,


            });
        }

    }

    const Updatepassword = (e) => {
        e.preventDefault();

        if (
            LoginSetting.Oldpassword.trim() === '' ||
            LoginSetting.Newpassword.trim() === "" ||
            LoginSetting.Confirmpassword.trim() === ""
        ) {
            toast.warn("All fields are required!")
        } else {

            if (LoginSetting.Newpassword !== LoginSetting.Confirmpassword) {
                toast.warn("Password does not match!");
            } else {
                UpdatePassword(user.email, LoginSetting.Oldpassword, LoginSetting.Newpassword)
            }


        }
    }



    return (
        <>
            <div className='flex flex-row mx-8'>
                <div className='my-[2rem]'>
                    <div className='bg-[#2c2c2c] rounded-xl mr-6'>
                        <div className='flex flex-col mt-2 ml-[1rem]'>
                            <h1 className='text-white mt-4'>Profile information</h1>
                            <div className='flex items-center mt-4 pl-6 '>
                                {Picture === null ? (
                                    <img
                                        src={Picture}
                                        alt='Profile'
                                        className='rounded-full h-28 w-28 mr-4 text-white'
                                    />
                                ) : (
                                    PictureChange === null ?
                                        <FaUserCircle color='gray' className='rounded-full h-28 w-28 mr-4' />
                                        :

                                        <img
                                            src={PictureChange}
                                            alt='Profile'
                                            className='rounded-full h-28 w-28 mr-4 text-white'
                                        />

                                )}

                                <div className='flex justify-start pl-2'>
                                    <label htmlFor="file-upload-picture" className="text-white py-2 px-4 bg-orange-500 rounded-lg mr-8 cursor-pointer">Upload new profile picture</label>
                                    <input id="file-upload-picture" type="file" onChange={handlechangeImg} className="hidden" />
                                    <button onClick={handleDeleteIMg} className=' text-black py-2 px-4 bg-white  rounded-lg ml-8 mr-2'>Remove picture</button>
                                </div>
                                <button onClick={handleSubmit} className=' text-white bg-orange-500 py-2 px-4 rounded-lg ml-auto mr-6'>Save</button>
                            </div>
                            <span className='text-gray-500 mt-[1rem] text-xs'></span>
                            <div className='container mx-auto mt-8'>
                                <form className='grid gap-y-4 mx-4' onSubmit={handleSubmit}>
                                    <div>
                                        <label className='block text-sm font-bold ml-1 mb-2 text-white'>Full name</label>
                                        <div className='relative'>
                                            <input
                                                type='text'
                                                name='Name'
                                                value={Perfil.Name}
                                                onChange={handleChangePerfil}
                                                placeholder='Your full name'
                                                className='py-3 px-4 block w-full text-white text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm bg-transparent border-b border-black rounded-full'
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className='block text-sm font-bold ml-1 mb-2 text-white'>Email</label>
                                        <div className='relative'>
                                            <input
                                                type='email'
                                                name='Email'
                                                value={Perfil.Email}
                                                onChange={handleChangePerfil}
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
                                                name='Location'
                                                value={Perfil.Location}
                                                onChange={handleChangePerfil}
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
                                                name='Nationality'
                                                value={Perfil.Nationality}
                                                onChange={handleChangePerfil}
                                                placeholder='American'
                                                className='py-3 px-4 block w-full text-white text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm bg-transparent border-b border-black rounded-full'
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className='block text-sm font-bold ml-1 mb-2 text-white'>Date Of Birth</label>
                                        <div className='relative'>
                                            <DatePicker
                                                selected={Perfil.Birthday}
                                                onChange={handleChangePerfil}
                                                placeholderText='dd/mm/yyyy'
                                                dateFormat='dd/MM/yyyy'
                                                className='py-3 px-4 block w-full text-white text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm bg-transparent border-b border-black rounded-full'
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className='block text-sm font-bold ml-1 mb-2 text-white'>Bio</label>
                                        <div className='relative'>
                                            <textarea
                                                id="Bio"
                                                name="Bio"
                                                rows="4"
                                                value={Perfil.Bio}
                                                onChange={handleChangePerfil}
                                                placeholder="Tell us about yourself"
                                                required
                                                className="py-3 px-4 block w-full text-white text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm bg-transparent border-b border-black "></textarea>
                                        </div>
                                    </div>
                                    <div className="rounded-lg bg-[#2C2C2C] p-4">
                                        <div className="flex flex-col sm:flex-row">
                                            <div className="mb-6 sm:mb-0">
                                                <h1 className="text-xl font-bold text-white mb-4">Logbook</h1>
                                                <Card id={1} imagen={InforPerfil?.Logbook} setimage={setimage} img={image} />
                                            </div>
                                            <div className="pl-4 sm:pl-10">
                                                <h1 className="text-xl font-bold text-white mb-4">Licence</h1>
                                                <Card id={2} imagen={InforPerfil?.Licence} setimage={setimageLic} img={imageLic} />
                                            </div>
                                            <div className="pl-4 sm:pl-10">
                                                <h1 className="text-xl font-bold text-white mb-4">Medical Certificate</h1>
                                                <Card id={3} imagen={InforPerfil?.MedicalCertificate} setimage={setimageMedical} img={imageMedical} />
                                            </div>
                                        </div>
                                    </div>
                                    <label className='block text-lg lg:text-xl font-bold ml-1 mb-2 text-white'>Login settings</label>

                                    <div>
                                        <label className='block text-sm font-bold ml-1 mb-2 text-white'>Old password</label>
                                        <div className='relative'>
                                            <input
                                                type='password'
                                                name='Oldpassword'
                                                value={LoginSetting.Oldpassword}
                                                onChange={handleChangeLoginSetting}
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
                                                    type='password'
                                                    name='Newpassword'
                                                    value={LoginSetting.Newpassword}
                                                    onChange={handleChangeLoginSetting}
                                                    placeholder='Enter your new password'
                                                    className='py-3 px-4 block w-full text-white text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm bg-transparent border-b border-black rounded-full'
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className='block text-sm font-bold ml-10 mb-2 text-white'>Confirm new password</label>
                                            <div className='relative'>
                                                <input
                                                    type='password'
                                                    name='Confirmpassword'
                                                    value={LoginSetting.Confirmpassword}
                                                    onChange={handleChangeLoginSetting}
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
                                                onClick={(e) => Updatepassword(e)}
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
        </>
    );
}

const Card = ({ id, imagen, setimage, img }) => {

    const handlechangeImg = (e) => {
        const selectedImage = e.target.files[0];
        if (selectedImage) {
            const reader = new FileReader()
            reader.onload = function (e) {
                const imageUrl = e.target.result
                setimage(imageUrl)
            }
            reader.readAsDataURL(selectedImage)
        }
    };

    return (
        <div className="m-2 p-4 bg-black rounded-lg border border-orange-500 max-w-md">
            <div className='flex items-center justify-center'>
                <div className='flex items-center justify-center w-full max-w-md h-48 rounded-lg' style={{ backgroundImage: imagen ? `url(${img !== null ? img : imagen})` : 'none', backgroundColor: imagen ? 'transparent' : 'black', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <label htmlFor={`file-upload-${id}`} className="px-3 py-2 text-right text-xs leading-4">
                        <div className="bg-white text-black px-4 py-2 rounded-full mb-6 max-w-md text-center cursor-pointer">
                            <input id={`file-upload-${id}`} type="file" onChange={handlechangeImg} className="hidden" />
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

const NavBar = () => {
    return (
        <div>
            <nav className="bg-black  p-4">
                <div className="mx-auto max-w-9xl px-2 sm:px-4 lg:px-6">
                    <div className="relative flex h-16 items-center justify-between">

                        <div className="flex items-center justify-end sm:justify-start">
                            <div className=" hidden sm:flex">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search for aircraft"
                                        className="border border-black text-white bg-gray-600 px-6 py-2 rounded-full focus:outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-y-0 right-0 flex items-center pr-6 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                            <button type="button" className="relative bg-orange-500 items-center justify-center  rounded-full p-1 text-white hover:text-white focus:outline-none focus:ring-2 pr-8 mr-10 pl-8 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                Rent
                            </button>

                            <button type="button" className="relative rounded-full bg-white-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 pr-10 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <FaPlane color='white' className="h-6 w-6" />
                            </button>

                            <button
                                type="button"
                                className="relative rounded-full bg-white-800 p-1 pr-10 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                < IoMdNotifications color='white' className="h-6 w-6" />
                            </button>

                            <div className="relative ml-3">
                                <div>
                                    <button type="button" className="relative flex rounded-full bg-white-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">Open user menu</span>

                                        <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default ProfileSettings
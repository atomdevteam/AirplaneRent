
import React from 'react'
import AircraftDetailsForm from '../../components/AircraftDetailsForm/AircraftDetailsForm'
import CTA from '../../components/CTA/CTA'
import Navbar from '../../components/Navbar/Navbar'

const AddAircraftLayout = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-col w-[50rem]'>
                <AircraftDetailsForm />
                {/* <CTA /> */}
            </div>
        </>

    )
}

export default AddAircraftLayout
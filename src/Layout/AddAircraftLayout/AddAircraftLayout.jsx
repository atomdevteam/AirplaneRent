
import React from 'react'
import AircraftDetailsForm from '../../components/AircraftDetailsForm/AircraftDetailsForm'
import CTA from '../../components/CTA/CTA'
import Navbar from '../../components/Navbar/Navbar'
import AircraftPrice from '../../components/AircraftPrice/AircraftPrice'

const AddAircraftLayout = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-col w-[50rem]'>
                <AircraftDetailsForm />
                <CTA />
                <AircraftPrice />
            </div>
        </>

    )
}

export default AddAircraftLayout
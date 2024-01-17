
import React from 'react'
import AircraftDetailsForm from '../../components/AircraftDetailsForm/AircraftDetailsForm'
import CTA from '../../components/CTA/CTA'
import Navbar from '../../components/Navbar/Navbar'
import AircraftPrice from '../../components/AircraftPrice/AircraftPrice'
import ActionButtons from '../../components/ActionButtons/ActionButtons'

const AddAircraftLayout = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-row'>
                <div className='flex flex-col w-[70rem]'>
                    <AircraftDetailsForm />
                    <CTA />
                    <AircraftPrice />
                </div>
                <div className='flex flex-col w-[18rem]'>
                    <ActionButtons />
                </div>
            </div>

        </>

    )
}

export default AddAircraftLayout
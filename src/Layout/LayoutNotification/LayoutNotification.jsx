import React from 'react'
import NavBarNotification from '../../components/NotificationsBlock/NavBarNotification/NavBarNotification'
import NotificationsBlock from '../../components/NotificationsBlock/NotificationsBlock'
import FilterBlock from '../../components/FilterBlock/FilterBlock'

const LayoutNotification = () => {
    return (
        <div>
            <NavBarNotification />
            <div className='flex flex-row'>
                <div className='w-[58rem]'>
                    <NotificationsBlock />
                </div>
                <div>
                    <FilterBlock />
                </div>


            </div>
        </div>
    )
}

export default LayoutNotification
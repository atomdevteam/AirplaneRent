// DashboardLayout.js
import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import bg from '../assets/AircraftReserve/AccountProfile.png';

const DashboardLayout = () => {
    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <MainContent />
        </div>
    );
};

const MainContent = () => {
    return (
        <div className="flex flex-col w-full overflow-hidden bg-[#1E1E1E] text-black">
            <div className='p-8'>
                <Navbar />
            </div>
            <div className="flex flex-grow overflow-hidden bg-[#1E1E1E] text-white">
                <LeftColumn />
                <RightColumn />
            </div>
        </div>
    );
};

const LeftColumn = () => {
    return (
        <div className="flex flex-col w-1/2 p-4">
            <GreetingBox />
            <WhiteButton />
            <div className="flex">
                <NotificationsBox />
                <ReserveManagementBox />
            </div>
        </div>
    );
};

const GreetingBox = () => {
    return (
        <div className="mb-6 bg-transparent p-4 rounded-lg">
            <h1 className="text-3xl font-bold text-white mb-2">Good morning, Aircraft Owner</h1>
            <p className="text-sm text-white">View your aircraft list and manage reserves.</p>
        </div>
    );
};

const WhiteButton = () => {
    return (
        <button className="bg-white text-black px-4 py-2 rounded-full mb-6 w-40">
            Add Aircraft
        </button>
    );
};

const NotificationsBox = () => {
    return (
        <div className="flex-1 bg-[#2C2C2C] p-8 rounded-[2rem] mb-4">
            <h2 className="text-xl font-bold mb-2 text-white">Notifications</h2>
            <p className="text-sm mb-4 text-white">Profile</p>
            {/* Image circles go here */}
            <div className="flex space-x-2">
                {/* Sample Image Circles */}
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                    <img src="https://placekitten.com/50/50" alt="Profile" className="object-cover w-full h-full" />
                </div>
                {/* ... (Repeat for other image circles) */}
            </div>
            {/* Right side label */}
            <p className="text-sm mt-2 text-gray-300">aircraft</p>
        </div>
    );
};

const ReserveManagementBox = () => {
    return (
        <div className="flex-1 bg-[#2C2C2C] p-8 rounded-[2rem] mb-4 ml-4">
            <h2 className="text-xl font-bold mb-2 text-white">Reserve Management</h2>
            <p className="text-sm mb-4 text-white">Maintenance Schedule</p>
            {/* Image circles go here */}
            <div className="flex space-x-2">
                {/* Sample Image Circles */}
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                    <img src="https://placekitten.com/54/54" alt="Profile" className="object-cover w-full h-full" />
                </div>
                {/* ... (Repeat for other image circles) */}
            </div>
            {/* Right side label */}
            <p className="text-sm mt-2 text-gray-300">reserve</p>
        </div>
    );
};

const RightColumn = () => {
    // Get the current date to display the month and year
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();

    // Calculate the start and end dates of the current week
    const firstDayOfWeek = new Date(currentDate);
    const lastDayOfWeek = new Date(currentDate);
    const diff = currentDate.getDate() - currentDate.getDay() + (currentDate.getDay() === 0 ? -6 : 1);
    firstDayOfWeek.setDate(diff);
    lastDayOfWeek.setDate(diff + 6);

    return (
        <div className="w-1/2 flex flex-col space-y-4 p-4 bg-[#1E1E1E]">
            {/* Three orange boxes in a row */}
            <div className="flex space-x-4">
                <div className="flex-grow bg-[#E7912A] p-4 rounded-lg space-y-2">
                    <div className="bg-gray-500 h-12 w-12 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        82%
                    </div>
                    <div className="text-white text-lg font-bold">Your aircraft reserve progress</div>
                </div>
                <div className="flex-grow bg-[#E7912A] p-4 rounded-lg space-y-2">Box 2</div>
                <div className="flex-grow bg-[#E7912A] p-4 rounded-lg space-y-2">Box 3</div>
            </div>

            {/* Visually appealing calendar */}
            <div className="bg-[#2C2C2C] p-4 rounded-lg">
                <div className="mb-4 text-2xl font-bold text-white">{currentMonth} {currentYear}</div>
                <div className="grid grid-cols-7 gap-2 text-white">
                    {/* Days of the week */}
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                        <div key={day} className="text-center font-bold">
                            {day}
                        </div>
                    ))}
                </div>

                {/* Days of the current week */}
                <div className="grid grid-cols-7 gap-2 text-white">
                    {Array.from({ length: 7 }, (_, index) => index).map((day) => {
                        const currentDay = new Date(firstDayOfWeek);
                        currentDay.setDate(firstDayOfWeek.getDate() + day);
                        return (
                            <div key={day} className="text-center rounded-full py-2 relative">
                                {day > 0 && (
                                    <div className="absolute h-4 w-px bg-white left-0 top-1/2 transform -translate-y-1/2"></div>
                                )}
                                {currentDay.getDate()}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};


export default DashboardLayout;


import React, { useState } from 'react';

const Navbar = () => {
    // State to manage the visibility of the dropdown menu
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    // Function to toggle the dropdown menu visibility
    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    return (
        <div className="flex items-center justify-between bg-[#1E1E1E] p-4 border-b border-[#3c3c3c]">
            {/* Left Side - Search Bar */}
            <div className="flex items-center">
                <div className="flex items-center bg-[#333] rounded-[2rem]">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-[#333] border-none px-6 py-3 rounded-[2rem] text-white focus:outline-none"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="16"
                        viewBox="0 0 512 512"
                        fill="#ffffff"
                        className="mr-4 cursor-pointer"
                    >
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                    </svg>
                </div>
            </div>

            {/* Right Side - Bell Icon, Message Icon, Image Circle, Dropdown Menu */}
            <div className="flex items-center space-x-4">
                {/* Bell Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    viewBox="0 0 448 512"
                    fill="#ffffff"
                    className="cursor-pointer"
                >
                    <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
                </svg>

                {/* Message Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="16"
                    viewBox="0 0 512 512"
                    fill="#ffffff"
                    className="cursor-pointer"
                >
                    <path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                </svg>

                {/* Image Circle */}
                <img
                    src="https://placekitten.com/40/40"
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover cursor-pointer"
                />

                {/* Dropdown Menu */}
                <div className="relative inline-block text-left">
                    <button onClick={toggleDropdown} className="flex items-center text-white focus:outline-none">
                        <span className="pr-2">My Aircraft</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="16"
                            width="16"
                            viewBox="0 0 320 512"
                            fill="#ffffff"
                            className="ml-2"
                        >
                            <path
                                d="M304 160H16C7.2 160 0 167.2 0 176s7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16zM152 288H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h136c8.8 0 16-7.2 16-16s-7.2-16-16-16zM304 416H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16z"
                                className="fill-current"
                            />
                        </svg>
                    </button>
                    {/* Dropdown Content */}
                    {isDropdownVisible && (
                        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#333] ring-1 ring-white ring-opacity-20">
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                {/* Dropdown Items */}
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                                    role="menuitem"
                                >
                                    Item 1
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                                    role="menuitem"
                                >
                                    Item 2
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                                    role="menuitem"
                                >
                                    Item 3
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;


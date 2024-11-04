import React from 'react';
import HeaderLogo from "../../assets/images/HeaderLogo.png";

const Navbar = () => {
    return (
        <nav className="font-marcellus bg-[#061C4C] flex items-center justify-between">
            {/* Left Section: Logo and Navigation Links */}
            <div className="flex items-center space-x-10">
                {/* Logo Section */}
                <img
                    src={HeaderLogo}
                    alt="CWRU Journal of Economics"
                    className="h-[100px] w-[200px]" // Adjust height and width of the logo
                />

                {/* Navigation Links */}
                <ul className="flex flex-row space-x-10 text-white text-lg">
                    <li>
                        <a href="/articles" className="hover:text-gray-400">Articles</a>
                    </li>
                    <li>
                        <a href="/working-papers" className="hover:text-gray-400">Working Papers</a>
                    </li>
                    <li>
                        <a href="/past-editions" className="hover:text-gray-400">Past Editions</a>
                    </li>
                    <li>
                        <a href="/blogs" className="hover:text-gray-400">Blogs</a>
                    </li>
                    <li>
                        <a href="/indexes" className="hover:text-gray-400">Indexes</a>
                    </li>
                </ul>
            </div>

            {/* Right Section: About Us and Search Icon */}
            <div className="text-white flex items-center gap-4 p-4">
                <a href="/about-us" className="hover:text-gray-400">About Us</a>
                <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </div>
        </nav>
    );
};

export default Navbar;
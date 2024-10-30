import React, { useState } from 'react';
import { IoReorderThreeOutline } from "react-icons/io5";
import Sidebar from '../component/sidebar';

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <header>
            <button onClick={toggleSidebar}>
                <IoReorderThreeOutline />
            </button>
            {isSidebarOpen && <Sidebar/>}
            <p className='text-[3.5rem]'>wawawawaw</p>
        </header>
    );
}

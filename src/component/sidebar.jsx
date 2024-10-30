import React from 'react'
import { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";


export default function Sidebar() {

    const [closeSideBar, useCloseSideBar] = useState(false)

    const toggleSidebar = () => {
        useCloseSideBar(!closeSideBar)
    }
// change background colors neto pota
return (
    <main className={`fixed top-0 left-0 h-full w-4/5 bg-gray-700 text-white transition-transform
    ${closeSideBar ? '-translate-x-full' : 'translate-x-0'} opacity-95 backdrop-blur-[90%]`}>
        <section className='flex-col justify-between items-center p-4 text-white '>
            <header className='flex justify-center items-center'>
                <button className='flex justify-center items-center bg-black h-[3.5rem] w-[15rem] rounded-full '>
                    <p className='text-lg'>New Advice</p> 
                    <FaPlus className='ml-3' />
                </button>
                <button onClick={toggleSidebar} className='ml-5'>
                    <FaArrowRight className='text-xl'/>
                </button>
            </header>

            <div className="flex items-center mt-3 bg-gray-600 rounded-full p-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="flex-grow bg-transparent text-white focus:outline-none"
                    />
                    <CiSearch className="ml-3 text-white text-xl" />
            </div>
                
            <br />
                {/* change color here to gray ish */}
            <hr className='' />

             <article className='mt-2 mb-3'>
                <p className='text-sm'>Previous 7 days</p>
             </article>
             <br />
                {/* change color here to gray ish */}
            <hr className='' />

            <article className='mt-2 mb-3'>
            <p className='text-sm'>Previous 7 days</p>
            </article>
        </section>
    </main>
)
}

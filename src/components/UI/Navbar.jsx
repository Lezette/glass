import React, { useState } from 'react';

import { navList } from '../constant';
const Navbar = () => {
    const [show, setShow] = useState(false);

    return(
        <nav className="absolute right-0 top-0 left-0 z-50 font-extralight">
            <div className="hidden md:grid py-8 pl-16 lg:grid-cols-6 grid-cols-2 gap-5">
                <div className="logo text-5xl lg:col-span-3">
                    Glass
                </div>
                <ul className="lg:col-span-2 grid grid-cols-4 gap-5">
                    {navList.map(nav => (
                        <li key={nav}><a href="./">{nav}</a></li>
                    ))}
                </ul>
            </div>
            <div className="md:hidden flex justify-between items-center py-4 px-8">
                <div className="logo text-3xl col-span-3">
                    Glass
                </div>
                {!show && (
                    <div>
                        <span className="text-2xl cursor-pointer" onClick={() => setShow(!show)}>&#9776;</span>
                    </div>
                )}
                {show && (
                <div className="bg-primary fixed right-0  top-0 h-full w-9/12 z-50">
                    <div className="blur-border p-4 h-full">
                    <div>
                        <div className="text-4xl text-right text-gray-200 transition-all pr-6" onClick={() => setShow(!show)}>&times;</div>
                        <ul>
                        {navList.map((nav) => (
                        <li key={nav} className="p-5 text-center text-white text-xl"><a href="./">{nav}</a></li>
                        ))}
                        </ul>
                    </div>
                    </div>
                </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;
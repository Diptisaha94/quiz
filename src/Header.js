import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faXmark,faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
//import { Link } from 'react-router-dom';

const Header = () => {
    const [open,setOpen]=useState(false);
        return (
        <div className='flex justify-between items-center px-20 py-6 bg-cyan-200'>
            <div className="text-2xl font-semibold">Play Quiz</div>
            <div onClick={()=>setOpen(!open)} className="h-6 w-6 md:hidden">
                {
                    open?<FontAwesomeIcon icon={faXmark}/>:<FontAwesomeIcon icon={faBars}/>
                }
            </div>
                <ul className={`md:flex absolute md:static sm:hidden ${open?'top-16 pl-4 py-4 left-14 bg-cyan-300':'top-[-120px]'}`}>
                <li className='pr-10'>
                        <NavLink to="/home" className={({isActive})=>
                    isActive?"text-indigo-500":"text-black"
                    }>
                            Home
                        </NavLink>
                    </li>
                    <li className='pr-10'>
                        <NavLink to="/topic" className={({isActive})=>
                    isActive?"text-indigo-500":"text-black"
                    }>
                            Topic
                        </NavLink>
                    </li>
                    <li className='pr-10'>
                        <NavLink to="/statistics" className={({isActive})=>
                    isActive?"text-indigo-500":"text-black"
                    }>
                            Statistics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className={({isActive})=>
                    isActive?"text-indigo-500":"text-black"}>Blog</NavLink>
                    </li>
                </ul>
        </div>
    );
};

export default Header;
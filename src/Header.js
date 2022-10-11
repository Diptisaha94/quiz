import React from 'react';
import { NavLink } from 'react-router-dom';
//import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between items-center px-20 py-6 bg-cyan-200'>
            <div className="text-2xl font-semibold">Play Quiz</div>
                <ul className='flex'>
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
import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({single}) => {
    //console.log(single);
    return (
        <div className='w-64 bg-cyan-50 p-5 shadow-md shadow-cyan-500'>
            <img className='' src={single.logo} alt=""/>
            <div className="flex justify-between mt-4">
                <h2 className='text-lg'>{single.name}</h2>
                <Link to={`/quiz/${single.id}`} className='bg-blue-400 py-1 px-4 rounded-md text-white'>Start Practice</Link>
            </div>
        </div>
    );
};

export default Quiz;
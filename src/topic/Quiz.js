import React from 'react';

const Quiz = ({single}) => {
    console.log(single);
    return (
        <div className='w-64 bg-cyan-50 p-5'>
            <img className='' src={single.logo} alt=""/>
            <div className="flex justify-between">
                <h2>{single.name}</h2>
                <a href="">Start Practice</a>
            </div>
        </div>
    );
};

export default Quiz;
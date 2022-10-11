import React from 'react';
import Option from './Option';

const Quesdetails = ({number}) => {
    //console.log(number);
    const {question,options,correctAnswer}=number;
    console.log(options);
    return (
        <div className='bg-cyan-50 w-3/4 m-auto mb-6 p-12 rounded-lg'>
            <h3 className='text-xl mb-4'>{question}</h3>
            <div className="">
                {
                    options.map((option,idx)=><Option key={idx} option={option} correctAnswer={correctAnswer}></Option>)
                }
            </div>
        </div>
    );
};

export default Quesdetails;
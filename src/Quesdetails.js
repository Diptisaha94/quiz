import React from 'react';
import Option from './Option';

const Quesdetails = ({number}) => {
    //console.log(number);
    const {question,options,correctAnswer}=number;
    console.log(options);
    return (
        <div>
            <h3>{question}</h3>
            <div className="">
                {
                    options.map((option,idx)=><Option key={idx} option={option} correctAnswer={correctAnswer}></Option>)
                }
            </div>
        </div>
    );
};

export default Quesdetails;
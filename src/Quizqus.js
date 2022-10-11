import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quesdetails from './Quesdetails';

const Quizqus = () => {
    const quesion = useLoaderData();
    //console.log(quesion);
    const quesionData=quesion.data; 
    const questionNumber = quesionData.questions;
    console.log(quesionData);
    console.log(questionNumber);
    return (
        <div>
            <div className="md:flex justify-center items-center mt-10 mb-6">
            <img className='w-40' src={quesionData.logo} alt=''/>
            <h3 className='text-4xl'>Quiz of {quesionData.name}</h3>
            </div>
            <div className="">
                {
                    questionNumber.map(number=><Quesdetails key={number.id} number={number}></Quesdetails>)
                }
            </div>
        </div>
    );
};

export default Quizqus;
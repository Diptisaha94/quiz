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
            <h3>Quiz of {quesionData.name}</h3>
            <div className="">
                {
                    questionNumber.map(number=><Quesdetails key={number.id} number={number}></Quesdetails>)
                }
            </div>
        </div>
    );
};

export default Quizqus;
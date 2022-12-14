import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const Topic = () => {
    const quiz = useLoaderData();
    const quizData = quiz.data;
    //console.log(quizData);
    return (
        <div className="mt-28">
            <div className='md:grid grid-cols-3 gap-y-8 py-6 px-4 gap-4'>
            {
                quizData.map(single=><Quiz key={single.id} single={single}></Quiz>)
            }
        </div>
        </div>
    );
};

export default Topic;
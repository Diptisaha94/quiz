import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizqus = () => {
    const quesion = useLoaderData();
    console.log(quesion);
    const {name}=quesion;
    return (
        <div>
            <h3>Quiz of {name}</h3>
        </div>
    );
};

export default Quizqus;
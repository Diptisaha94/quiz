import React from 'react';
import Header from './Header';
import Lottie from "lottie-react";
import quiz from "./91736-exams.json";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="md:flex justify-between">
                <div className="mt-36 pl-10">
                    <h2 className='text-5xl font-medium mb-8'>Welcome</h2>
                    <p className='text-2xl'>There is no substitute for answering quizzies</p>
                    <p className='text-2xl'>to expand knowledge.</p>
                </div>
                <Lottie className='w-2/4' animationData={quiz} loop={true}/>
            </div>
        </div>
    );
};

export default Home;
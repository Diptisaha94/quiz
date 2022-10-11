import React from 'react';
import Option from './Option';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Quesdetails = ({number}) => {
    //console.log(number);
    const {question,options,correctAnswer}=number;
    console.log(options);
    const seeAnswer=()=>{
        toast(`Correct answer : ${correctAnswer}`);
    }
    return (
        <div className='bg-cyan-50 w-3/4 m-auto mb-6 pb-12 rounded-lg'>
            <div className="flex bg-cyan-200 justify-between px-6 py-6 items-center">
            <h3 className='text-xl mb-4'>{question}</h3>
            <button onClick={seeAnswer}><FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            <ToastContainer/>
            </button>
            </div>
            <div className="">
                {
                    options.map((option,idx)=><Option key={idx} option={option} correctAnswer={correctAnswer}></Option>)
                }
            </div>
        </div>
    );
};

export default Quesdetails;
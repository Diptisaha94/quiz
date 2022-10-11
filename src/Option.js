import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Option = ({option,correctAnswer}) => {
    const notify = (e) => {
        const target =e.target.value;
        if(target===correctAnswer){
            toast("Wow so easy !");
        }else{
            toast("wrong ans !");
        }

    };
    return (
        <div className=''>
            <input className='mr-2' onChange={notify} type="radio" value={option}/>
<label className='mr-6'>{option}</label>
<ToastContainer/>
        </div>
    );
};

export default Option;
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Option = ({option,correctAnswer}) => {
    const notify = (e) => {
        const target =e.target.value;
        if(target===correctAnswer){
            toast("Correct Answer");
        }else{
            toast("Wrong Answer");
        }

    };
    return (
        <div className='mt-6'>
            <input className='mr-2' onChange={notify} type="radio" name='option1' value={option}/>
<label className='mr-6'>{option}</label>
<ToastContainer/>
        </div>
    );
};

export default Option;
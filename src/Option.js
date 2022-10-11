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
        <div>
            <input onChange={notify} type="radio" value={option}/>
<label>{option}</label>
<ToastContainer/>
        </div>
    );
};

export default Option;
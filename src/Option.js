import React from 'react';

const Option = ({option}) => {
    return (
        <div>
            <input type="radio" id="html" name="fav_language" value="HTML"/>
<label for="html">{option}</label><br></br>
        </div>
    );
};

export default Option;
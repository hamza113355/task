import React from "react";
import { useState } from "react";

const NameInputBar = ({ onFormSubmit }) => {

    const [value, setValue] = useState("");

    const handleOnChange = (event) => {
        setValue(event.target.value);
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();

        onFormSubmit(value);

        setValue("");
    };

    return (
        <div style={{marginTop: '45px'}}>
            <div>
                <span style={{fontSize: '14px', fontWeight: 'bold'}}>Please enter a name here:</span>
            </div>
            <form onSubmit={handleOnSubmit}>
                <input onChange={handleOnChange} value={value}/>
                <button style={{marginLeft: '8px'}}>Submit</button>
            </form>
            
        </div>
    );
};

export default NameInputBar;
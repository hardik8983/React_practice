import React, { useState } from 'react';

const Form = () => {
    const [val, SetVal] = useState();
    const changeValue = (event) => {
        SetVal(event.target.value);
    }
    const submitData = (event) => {
        event.preventDefault();
    }
    return (
        <form onSubmit={submitData}>
            <h1>Form <br/>{val}</h1>
            <input onChange={changeValue} defaultValue={val} placeholder="Enter Your Name"/>
           <br/>
           <br/> 
           <button type="submit">Submit</button>
        </form>
    )
}
export default Form;
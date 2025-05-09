import React, {useState} from 'react';

function MyComponent(){
    const [name,setName]=useState("Guest");
    const [age,setAge]=useState(0);
    const[isEmployed,setisEmployed]=useState(false);
    const updateName=()=>{
        setName("spongebob");
    }
    const updateAge=()=>{
        setAge(age +1);
    }
    const toggleEmployedStatus=()=>{
        setisEmployed(!isEmployed);
    }
    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}>Set Age</button>

            <p>Is employed: {isEmployed ? "Yes" : "No" }</p>
            <button onClick={toggleEmployedStatus}>Toggle status</button>
        </div>
    );
}
export default MyComponent
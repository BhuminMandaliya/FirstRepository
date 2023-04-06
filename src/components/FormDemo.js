import React, { useState } from 'react'
const FormDemo = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const emailChange=(e)=>
    {
        setEmail(e.target.value);
    }
    const passwordChange=(e)=>
    {
        setPassword(e.target.value);
    }
    const handleSubmit=(e)=>
    {
       // e.preventDefault();
        const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const passwordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if(!emailRegex.test(email))
        {
            alert("Please enter a valid email ID")
        }
        else if(!passwordRegex.test(password))
        {
            alert("Enter valid password")
        }
        else
        {
            console.log("Form submitted...");
            localStorage.setItem("userName",email);
            window.location.pathname="/welcome";      
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <label>
            Email:
            <input type="email" value={email} onChange={emailChange}/>
            Password:
            <input type="password" onChange={passwordChange} value={password}/>
            <input type="submit"/>
        </label>
    </form>    
  )
}
export default FormDemo
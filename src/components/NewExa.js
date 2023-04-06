import axios from 'axios';
import React, { useEffect, useState } from 'react'

const NewExa = () => {
    const[joke,setJoke]=useState("");
    useEffect(() => {
        fetchJoke()
    },[])
    const fetchJoke=()=>
    {
        axios.get("https://official-joke-api.appspot.com/random_joke").then((res)=>
        {
            const{setup,punchline}=res.data;
            setJoke(`${setup} ${punchline}`);
        }).catch((e)=>
        {
            console.error(e);
        })
    }
  return (
    <div>
        <h1>Random joke generator</h1>
        <p>{joke}</p>
        <button onClick={fetchJoke}>New joke</button>
    </div>
  );
}

export default NewExa
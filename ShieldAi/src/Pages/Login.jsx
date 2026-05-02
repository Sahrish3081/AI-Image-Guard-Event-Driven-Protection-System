import React from "react";
import {useState,useContext} from 'react'
import UserContext from "../assets/Context/UserContext";
function Login() {
    const [userName, setUserName]=useState('');
    const [password, setPassword]=useState('');
    const {setUser}=useContext(UserContext)
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({userName, password})

    }
    return (

    <section>
        <div className="bg-[##161332]">
            <span className="text-white">Shield AI</span>
        </div>
    </section>



       <div className='login'>
        <h2>LOGIN</h2>
        <input type='text'
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}
        placeholder='Enter UserName' />
    
        <input tpye='text'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Password'/>
        <br></br>
        <button onClick={handleSubmit}>Login</button>
       </div> 
    )
}

export default Login

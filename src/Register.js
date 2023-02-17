import React,{useRef} from 'react'
import {useNavigate} from 'react-router-dom';
import "./Register.css"
import { Link } from 'react-router-dom';
// import  Axios  from 'axios';
// import Login from './Login';
// import axios from 'axios';

const Register = () => {
    
    const navigate = useNavigate();
    const name=useRef();
    const email=useRef();
    const password=useRef();
    

    
   
    
    const handleClick = () =>{
let user=JSON.parse(localStorage.getItem(name))

        
        if(name.current.value&&email.current.value&&password.current.value)
        {
            if(!user){
                user={}
                user.name=name.current.value
                user.email=email.current.value
                user.password=password.current.value
                localStorage.setItem(email.current.value,JSON.stringify(user))
            }
            // localStorage.setItem("name",name.current.value);
            // localStorage.setItem("email",email.current.value);
            // localStorage.setItem("password",password.current.value);
            // localStorage.setItem("signup",email.current.value);
            alert("account created");
            // window.location.reload();
            navigate("/login");
            
        }
    }


  return (
    <>
    
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logoName'>Chat</span>
                <span className='title'>Register</span>
                <form>
                    <input autoComplete='off' type="text" placeholder='Enter your name' ref={name} />
                    <input autoComplete='off' type="email" placeholder='Enter your email' ref={email}/>
                    <input autoComplete='off' type="password" placeholder='Enter your password' ref={password}/>
                    <button onClick={handleClick}>Sign Up</button>
                </form>
                <p>Have an Acoount? <Link to="/login">Log In</Link></p>
            </div>
        </div>
  
    </>
  )
}

export default Register

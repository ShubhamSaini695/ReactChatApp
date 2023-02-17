import React, {useRef} from 'react'
import "./Register.css"
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

// import { userProvider } from './userContext';

const Login = () => {
    const navigate = useNavigate();
    const email=useRef();
    const password=useRef();
    const gotoHome = () =>{
        // navigate("/home");

        let user=JSON.parse(localStorage.getItem(email.current.value))
        
        if(email.current.value===user.email && password.current.value===user.password)
        {
            
                navigate("/home");
            
        }
        
    }
  return (
    <>
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className='logoName'>Chat</span>
                <span className='title'>Log In</span>
                <form>
                    <input type="email" placeholder='Enter your email' ref={email}/>
                    <input type="password" placeholder='Enter your password' ref={password}/>
                    <button onClick={gotoHome}>Sign In</button>
                </form>
                <p>Don't Have an Acoount? <Link to="/">Register</Link></p>
            </div>
        </div>
    </>
  )
}

export default Login

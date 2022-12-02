import React, {useRef} from "react";
import {Link, useNavigate} from "react-router-dom";


function Login(){

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate(); 

   
  


    const handleSubmit = (e) => {
        //prevent default behaviour of the form
        e.preventDefault();
        fetch('http://localhost:8080/api/login',
        {
        //POST request
          method: 'POST',
          body: JSON.stringify({
            username:usernameRef.current.value, //{variable}
            password:passwordRef.current.value,
  
          }),
          headers:{
            "Content-Type": "application/json",
          }
        }).then(response=> {
            return response.json()
        }).then(data =>{
            if (data ===true)  navigate('/main')
        })
      

     
    }
    return(
        <div>
        <form>
            
            
            <label>Username
            <input
                placeholder="Username"  
                type="text"
                ref={usernameRef}
            /> </label>
             <label >Password
            <input
                placeholder="Password"
                type="password"
               ref={passwordRef}
            /></label>
                
                <input onClick = {handleSubmit} type="submit"/>

           
        </form>
        
    </div>
    );
}


export default Login;
import React, { useState } from "react";
import "./Login.scss";
const Login = () => {

    const [credentials,setCredentials] = useState({
        email: "",
        password: ""
    });

    //Iterate credentials and set new input data
    const updateCredentials = (data) => {
        setCredentials({...credentials,[data.target.name]: data.target.value})
    }

    const attemptLogin = async() => {
        try {
            console.log(credentials)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="loginDesign">
            <div className="loginInputs">
            <input type="text" name="email" title="email" onChange={updateCredentials}/>
            <input type="text" name="password" title="password" onChange={updateCredentials} />
            <button onClick={() => attemptLogin()}>Login</button>
            </div>
        </div>
    );
}

export default Login;
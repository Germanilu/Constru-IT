import React, { useState } from "react";
import "./Login.scss";

import { useDispatch} from "react-redux";
import {loginUser} from "../../Features/userSlice";


const Login = () => {

    const [credentials,setCredentials] = useState({
        email: "",
        password: ""
    });

    const dispatch = useDispatch();

    //Iterate credentials and set new input data
    const updateCredentials = (data) => {
        setCredentials({...credentials,[data.target.name]: data.target.value})
    }

    const attemptLogin = () => {
        //Regular expression to validate email
        if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(credentials.email)) {
            console.log(" Introduci un'email valida ");
            return;
        }

        dispatch(loginUser({email:credentials.email, password: credentials.password}))
        
        
    }

    return(
        <div className="loginDesign">
            <div className="loginInputs">
            <input type="text" name="email" title="email" onChange={updateCredentials}/>
            <input type="text" name="password" title="password" onChange={updateCredentials} />
            <button type="submit" onClick={() => attemptLogin()}>Login</button>
            </div>
        </div>
    );
}

export default Login;
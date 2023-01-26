import React, { useState, useEffect } from "react";
import "./Login.scss";

import { useDispatch, useSelector} from "react-redux";
import {loginUser, userData} from "../../Features/userSlice";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const [credentials,setCredentials] = useState({
        email: "",
        password: ""
    });

    const [outputAttempt, setOutputAttempt] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userInfo = useSelector(userData)

    useEffect(() => {
        if(userInfo.token !== ""){
            navigate('/dashboard')
        }
    })

    //Iterate credentials and set new input data
    const updateCredentials = (data) => {
        setCredentials({...credentials,[data.target.name]: data.target.value})
    }

    const attemptLogin = () => {
        //Regular expression to validate email
        if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(credentials.email)) {
            setOutputAttempt(" Introducir una email valida ");
            return;
        }
        setOutputAttempt(" Estoy revisando los datos... ");
        dispatch(loginUser({email:credentials.email, password: credentials.password}, setOutputAttempt))
    }

    return(
        <div className="loginDesign">
            <div className="loginInputs">
            <input type="text" name="email" title="email" onChange={updateCredentials}/>
            <input type="text" name="password" title="password" onChange={updateCredentials} />
            {outputAttempt}
            <button type="submit" onClick={() => attemptLogin()}>Login</button>
            </div>
        </div>
    );
}

export default Login;
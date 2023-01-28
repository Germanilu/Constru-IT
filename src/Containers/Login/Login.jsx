import React, { useState, useEffect } from "react";
import "./Login.scss";

import logo from "../../img/logo.png";

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
        <section className="loginDesign" id="login">
            
            <div className="loginInputs">
            <div className="loginLogo">
                <img className="logo-login" src={logo} alt="logo"/>
                <h1>Constru-IT</h1>
            </div>
            <h1>Bienvenido/a</h1>
            <input type="text" name="email" title="email" placeholder="Escribe tu email" onChange={updateCredentials}/>
            <input type="text" name="password" title="password" placeholder="Contraseña" onChange={updateCredentials} />
            {outputAttempt}
            <button className="login-home btn1" type="submit" onClick={() => attemptLogin()}><span>Ingresar</span></button>
            </div>
        </section>
    );
}

export default Login;
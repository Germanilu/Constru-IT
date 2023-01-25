import React, { useState } from 'react';
import './Register.scss'
import axios from 'axios'
const Register = () => {
    //Hooks
    const [userData, setUserData] = useState({
        name: '',
        surname: '',
        nif: '',
        mobile: '',
        address: '',
        businessName: '',
        email: '',
        password: '',
    })

    //Verification for the password
    const [passwordVerification, setPasswordVerification] = useState()
    //Register attempt message 
    const [outputAttempt, setOutputAttempt] = useState();
    //Role selected 
    const [roleSelected, setRoleSelected] = useState("none");   

    //Iterate userData and assign to each key the current value
    const updateUserData = (data) => {
        setUserData({...userData, [data.target.name]: data.target.value})
    }
    
    //Attempt to register the user
    const registerUser = async() => {
        
        /*VALIDATIONS*/
        //Check empty inputs and return error if any
        let inputs = [
            'name',
            'surname',
            'nif',
            'mobile',
            'address',
            "businessName",
            'email',
            'password',
        ];
        for (let value of inputs) {
            if (userData[value] === '') {
                setOutputAttempt("Tienes que rellenar todos los datos");
                return;
            }
        }

        /*REGULAR EXPRESSION*/
        //Email
        if (!userData.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
            setOutputAttempt("Inserta un email valido");
            return;
        }
        //Password with special character
        if (!userData.password.match(/^(?=.*[*@!#%&()^~{}]).*$/)) {
            setOutputAttempt("La password tiene que tener un caracter especial");
            return;
        }
        //Check double password verification
        if(userData.password !== passwordVerification){
            setOutputAttempt("Las contraseñas no coinciden");
            return;
        }
        
        //Checking if user select role 
        if(roleSelected === "none"){
            setOutputAttempt("Tienes que seleccionar un tipo de usuario")
            return;
        }

        try {
            if(roleSelected === "projectManager"){
                const attempt = await axios.post("https://bbobras.onrender.com/api/auth/projectManagerSignIn",userData)
                if(attempt.status === 200){
                    setOutputAttempt("Registrado Correctamente")
                    // setTimeout(() => {
                    //     window.location.reload()
                    // }, 2000);
                }
            }else if(roleSelected === "client"){
                const attempt = await axios.post("https://bbobras.onrender.com/api/auth/clientSignIn",userData)
                if(attempt.status === 200){
                    setOutputAttempt("Registrado Correctamente")
                    // setTimeout(() => {
                    //     window.location.reload()
                    // }, 2000);
                }
            }
        } catch (error) {
            setOutputAttempt(error.response.data.message)
        }
    }

    return(
        <div className='registerDesign'>
            <div className="registerBlock">
                <div className="registerInput">
                    <div className="inputBlock">
                        <p>Nombre:</p>
                        <input type="text" name='name' title='name' onChange={updateUserData} />
                    </div>
                    <div className="inputBlock">
                        <p>Apellido:</p>
                        <input type="text" name='surname' title='surname' onChange={updateUserData} />
                    </div>
                    <div className="inputBlock">
                        <p>NIF:</p>
                        <input type="text" name='nif' title='nif' onChange={updateUserData} />
                    </div>
                    <div className="inputBlock">
                        <p>Telefono:</p>
                        <input type="text" name='mobile' title='mobile' onChange={updateUserData} />
                    </div>
                    <div className="inputBlock">
                        <p>Direccion:</p>
                        <input type="text" name='address' title='address' onChange={updateUserData} />
                    </div>
                    <div className="inputBlock">
                        <p>Nombre Empresa:</p>
                        <input type="text" name='businessName' title='businessName' onChange={updateUserData} />
                    </div>
                    <div className="inputBlock">
                        <p>Email:</p>
                        <input type="text" name='email' title='email' onChange={updateUserData} />
                    </div>
                    <div className="inputBlock">
                        <p>Password:</p>
                        <input type="text" name='password' title='password' onChange={updateUserData} />
                    </div>
                    <div className="inputBlock">
                        <p>Repite la Password:</p>
                        <input type="text" onChange={e => setPasswordVerification(e.target.value)} />
                    </div>                    
                    {/* //Seleccion de role */}
                    <div className="inputBlock">
                        <p>Usuario</p>
                        <select  onChange={e => setRoleSelected(e.target.value)}>
                            <option value="none">Selecciona una opcion</option>
                            <option value="client">Cliente</option>
                            <option value="projectManager">Project Manager</option>
                        </select>
                    </div>                    
                </div>
                    <div className="messageError">{outputAttempt}</div>
                    <button onClick={() => registerUser()}>Register</button>
            </div>
        </div>
    );
}

export default Register;
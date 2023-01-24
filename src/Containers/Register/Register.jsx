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

    const updateUserData = (data) => {
        setUserData({...userData, [data.target.name]: data.target.value})
    }

    const registerUser = async() => {
        try {
            const attempt = await axios.post("https://bbobras.onrender.com/api/auth/projectManagerSignIn",userData)
            if(attempt.status === 200){
                console.log("Registrado!")
                setTimeout(() => {
                    window.location.reload()
                }, 2000);
            }
        } catch (error) {
            console.log("Error ", error)
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
                    
                </div>
                    <button onClick={() => registerUser()}>Register</button>
            </div>
        </div>
    );
}

export default Register;
import React from 'react';
import './Register.scss'
const Register = () => {

    return(
        <div className='registerDesign'>
            <div className="registerBlock">
                <div className="registerInput">
                    <div className="inputBlock">
                        <p>Nombre:</p>
                        <input type="text" name='name' title='name' />
                    </div>
                    <div className="inputBlock">
                        <p>Apellido:</p>
                        <input type="text" name='name' title='name' />
                    </div>
                    <div className="inputBlock">
                        <p>NIF:</p>
                        <input type="text" name='name' title='name' />
                    </div>
                    <div className="inputBlock">
                        <p>Telefono:</p>
                        <input type="text" name='name' title='name' />
                    </div>
                    <div className="inputBlock">
                        <p>Direccion:</p>
                        <input type="text" name='name' title='name' />
                    </div>
                    <div className="inputBlock">
                        <p>Nombre Empresa:</p>
                        <input type="text" name='name' title='name' />
                    </div>
                    <div className="inputBlock">
                        <p>Email:</p>
                        <input type="text" name='name' title='name' />
                    </div>
                    <div className="inputBlock">
                        <p>Password:</p>
                        <input type="text" name='name' title='name' />
                    </div>
                    
                </div>
                    <button>Register</button>
            </div>
        </div>
    );
}

export default Register;
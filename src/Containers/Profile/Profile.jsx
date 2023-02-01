import './Profile.scss';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../Features/userSlice";
import { current } from '@reduxjs/toolkit';

const Profile = () => {

    const [showInput, setShowInput] = useState(false)
    console.log(showInput)

    //Const
  const userInfo = useSelector(userData);
return(
    <div className='profileDesign'>
        <div className="containerProfile">
            <div className="profileInfo">
                <div className="profileData">
                    <p>Nombre: {showInput? <input type="text" placeholder={(userInfo.user_name)} onClick={(e) => e.stopPropagation()}></input> :userInfo.user_name} </p>
                    <p>Apellido: {showInput? <input type="text" placeholder={userInfo.user_surname} onClick={(e) => e.stopPropagation()}></input> :userInfo.user_surname} </p>
                    <p>NIF:{showInput? <input type="text" placeholder={userInfo.user_nif} onClick={(e) => e.stopPropagation()}></input> :userInfo.user_nif}</p>
                    <p>Telefono:{showInput? <input type="text" placeholder={userInfo.user_mobile} onClick={(e) => e.stopPropagation()}></input> :userInfo.user_mobile}</p>
                    <p>Dirección:{showInput? <input type="text" placeholder={userInfo.user_address} onClick={(e) => e.stopPropagation()}></input> :userInfo.user_address}</p>
                    <button onClick={() => setShowInput(!showInput)}>Modificar</button>
                    {showInput? <button>Guardar</button>: null}
                </div>
            <div className="profileSensibleData">
            </div>

            </div>

        </div>
    </div>
)
}

export default Profile;
import React, {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout,userData } from "../../Features/userSlice";

const Dashboard = () => {

    const userInfo = useSelector(userData);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {

    },[])

    useEffect(() => {
        if(userInfo.token === ""){
            navigate('/')
        }
    })

    return(
        <div className="dashboardDesign">
            <h1>Bienvenido! {userInfo.user_name} </h1>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
   
}

export default Dashboard;
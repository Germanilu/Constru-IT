import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, userData } from "../../Features/userSlice";
import "./Dashboard.scss";
import NewProject from "../Project/NewProject/NewProject";
import UserProject from "../Project/UserProject/UserProject";


const Dashboard = () => {
  const userInfo = useSelector(userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {}, []);

  useEffect(() => {
    if (userInfo.token === "") {
      navigate("/");
    }
  });

  return (
    <div className="dashboardDesign">
    <button className="logoutButton" onClick={() => dispatch(logout())}>Logout</button>
      <div className="sideBarContainer">
        <div className="sideBarMenu">
          <div className="sideBarSelectionContainer">
            <h2>Nuevo Proyecto</h2>
            <h2>Mis Proyectos</h2>
            <h2>Perfil</h2>
          </div>
        </div>
        <div className="renderContainer">
            {<NewProject></NewProject>}
        </div>
      </div>
      <div className="chatComponentContaine"></div>
    </div>
  );
};

export default Dashboard;

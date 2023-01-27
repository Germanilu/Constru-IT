import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, userData } from "../../Features/userSlice";
import "./Dashboard.scss";
import NewProject from "../Project/NewProject/NewProject";
import UserProject from "../Project/UserProject/UserProject";
import ChatButton from "../../Components/ChatButton/ChatButton";
import Chat from "../Chat/Chat"

const Dashboard = () => {

  //Hooks
  const [select,setSelect] = useState("newProject");
  const [openChat, setOpenChat] = useState(false)  

  //Const
  const userInfo = useSelector(userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {}, []);

  useEffect(() => {
    if (userInfo.token === "") {
      navigate("/");
    }
  });

  const chatInteraction = () => {
    setOpenChat(!openChat)
  }

  return (
    <div className="dashboardDesign">
    <button className="logoutButton" onClick={() => dispatch(logout())}>Logout</button>
      <div className="sideBarContainer">
        <div className="sideBarMenu">
          <div className="sideBarSelectionContainer">
            <h2 onClick={() => setSelect("newProject")}>Nuevo Proyecto</h2>
            <h2 onClick={() => setSelect("userProject")}>Mis Proyectos</h2>
            <h2>Perfil</h2>
          </div>
        </div>
        <div className="renderContainer">
            {
                select === "newProject"? (
                    <NewProject></NewProject>
                ): select === "userProject" ? (
                    <UserProject></UserProject>
                ): null
            }
        </div>
      </div>
      <div className="chatComponentContaine">
        {
          openChat?<Chat/>:null
        }
      </div>
      {/* Passing to ChatButton component the function to open the chat as prop */}
      <div className="chatbuttonContainer"><ChatButton showChats={chatInteraction}/></div>
    </div>
  );
};

export default Dashboard;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, userData } from "../../Features/userSlice";
import "./Dashboard.scss";
import Clients from "../Clients/Clients"
import ProjectManagers from "../ProjectManagers/ProjectManagers";
import UserProject from "../Project/UserProject/UserProject";
import ChatButton from "../../Components/ChatButton/ChatButton";
import Chat from "../Chat/Chat"
import ChatWindow from "../../Components/ChatWindow/ChatWindow";
import Profile from "../Profile/Profile"

const Dashboard = () => {

  //Hooks
  const [select,setSelect] = useState("");
  const [openChat, setOpenChat] = useState(false)  
  const [openWindow, setOpenWindow] = useState({
    open: false,
    chatInfo: ""
  })

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

  //This function show and hide the chat
  const chatInteraction = () => {
    setOpenChat(!openChat)
  }

  //Function send to chat.jsx as prop to set idChast on setOpenWindow Hook
  const selectedChat = (chatId) => {
    setOpenWindow({open: !openWindow.open, chatInfo:chatId})
}

//Render different sideBarContainer if user is PM or Client
const renderDependingOnRole = () => {
  if(userInfo.user_role  === "63c6963759433440683992f3") {
    return (
      <div className="sideBarSelectionContainer">
            <h2 onClick={() => setSelect("clients")}>Clientes</h2>
            <h2 onClick={() => setSelect("userProject")}>Mis Proyectos</h2>
            <h2 onClick={() => setSelect("profile")}>Perfil</h2>
      </div>
    )
  }else if (userInfo.user_role === "63c6963759433440683992f2"){
    return(
      <div className="sideBarSelectionContainer">
            <h2 onClick={() => setSelect("projectManager")}>Project Manager</h2>
            <h2 onClick={() => setSelect("userProject")}>Mis Proyectos</h2>
            <h2 onClick={() => setSelect("profile")}>Perfil</h2>
      </div>
    )
  }
}

  return (
    <div className="dashboardDesign">
    <div className="navbarDashboard">
      <h1>Bienvenido User Name</h1>
      <button className="logoutButton" onClick={() => dispatch(logout())}><span>Logout</span></button>
    </div>
    
      <div className="sideBarContainer">
        <div className="sideBarMenu">
        {renderDependingOnRole()}        
        </div>
        <div className="renderContainer">
            {
                select === "clients"? (
                    <Clients></Clients>
                ):select === "projectManager"? (
                  <ProjectManagers></ProjectManagers>
                ): select === "userProject" ? (
                    <UserProject></UserProject>
                ): select === "profile"? (
                    <Profile></Profile>
                ): null
            }
        </div>
        <div className="chatComponents">
        <div className="chatComponentContaine">
        {
          openChat?<Chat selectedChat={selectedChat}/>:null
        }
      </div>
      {/* Passing to ChatButton component the function to open the chat as prop */}
      <div className="chatbuttonContainer"><ChatButton showChats={chatInteraction}/></div>
      <div className="chatsContainer">
        {/* Sending hook to chatWindow with chat info */}
        {
          openWindow.open?<ChatWindow openWindow={openWindow} setOpenWindow={setOpenWindow}></ChatWindow>:null
        }
      </div>
        </div>
      </div>
      
    </div>
  );
};

export default Dashboard;

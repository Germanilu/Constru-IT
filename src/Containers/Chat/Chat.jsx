import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {userData} from "../../Features/userSlice"
import axios from "axios"
import "./Chat.scss"

const Chat = ({selectedChat}) => {

    const [businessChat, setBusinessChats] = useState({})
    const [workerChats, setWorkerChats] = useState({});

    //Const
    const userInfo = useSelector(userData);

    
    useEffect(() => {
        getChat()
    },[])

    //Get all the available chat for the user
    const getChat = async() => {
        try {
            let config = {
                headers: { Authorization: `Bearer ${userInfo.token}` }
            };
            const attempt = await axios.get("https://bbobras.onrender.com/api/getallchats",config);
            if(attempt.status === 200){
                setBusinessChats(attempt.data.data )
                setWorkerChats(attempt.data.allChatsE)
            }
            
        } catch (error) {
            console.log(error)
        }
    }



    //If user is PM
    if(userInfo.user_role === "63c6963759433440683992f3"){
        return(
            <div className="chatDesign">
            <div className="businessChatsContainer">
                <div>Clientes</div>
            {
                    businessChat.length > 0 && (
                       businessChat.map((e) => {
                            return(
                                <div className="chatRow" key={e._id} onClick={() => selectedChat(e._id) }>{e.clientName}</div>
                            )
                        })
                    )
                }
            </div>
            <div className="workChatsContainer">
            <div>Empleados</div>
            {
                    workerChats.length > 0 && (
                       workerChats.map((e) => {
                            return(
                                <div className="chatRow" key={e._id} onClick={() => selectedChat(e._id) }>{e.employeeName}</div>
                            )
                        })

                    )
                }
            </div>
        </div>
        )
        //If user is Client or Employee
    }else if (userInfo.user_role === "63c6963759433440683992f2" || userInfo.user_role === "63c6963759433440683992f4"){
        return(
            <div className="chatDesign">
            <div className="businessChatsContainer">
            <div>ProjectManager</div>
            {
                    businessChat.length > 0 && (
                       businessChat.map((e) => {
                            return(
                                <div className="chatRow" key={e._id} onClick={() => selectedChat(e._id) }>{e.projectManagerName}</div>
                            )
                        })

                    )
                }
            </div>
        </div>
        )
    }
}

//Small Change

export default Chat;
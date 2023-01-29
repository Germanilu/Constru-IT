import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userData } from "../../Features/userSlice";
import axios from "axios";
import "./ChatWindow.scss"
const ChatWindow = ({openWindow, setOpenWindow}) => {
    console.log(openWindow.chatInfo._id)

    const [loadMessage, setLoadMessage] = useState([])
    //Const
    const userInfo = useSelector(userData);

    useEffect(() => {
        loadMessageInChat()
    },[]);

    useEffect(() => {
        
    })

    const loadMessageInChat = async() => {
        try {
            let config = {
                headers: { Authorization: `Bearer ${userInfo.token}` }
            };
            const attempt = await axios.get(`https://bbobras.onrender.com/api/messages/${openWindow.chatInfo._id}`,config)
            if(attempt.status === 200){
                setLoadMessage(attempt.data.data)
                console.log(attempt.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="chatWindowDesign">
            <div className="headerChatWindow">
                <div className="pictChatWindow">img</div>
                <div className="nameChatWindow">
                    {/* Depending on the userInfoRole show name on chat*/}
                    {
                        userInfo.user_role  === "63c6963759433440683992f3"? openWindow.chatInfo.clientName || openWindow.chatInfo.employeeName:openWindow.chatInfo.projectManagerName
                    }
                </div>
                <div className="closeChatWindow" onClick={() => setOpenWindow({open: false})}>X</div>
            </div>
            <div className="bodyChatWindow">
                {
                    loadMessage.map(e => {
                        return(
                            <div className="bodyChatWindowResult" key={e._id}>
                                <div className="bodyChatWindowName">{e.userName + " " + e.userSurname}</div>
                                <div className="bodyChatWindowMessageContainer">
                                    <div className="bodyChatWindowDate">{e.date}</div>
                                    <div className="bodyChatWindowMessage">{e.message}</div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <div className="inputChatWindow">
                <textarea type="text" className="inputMessageChatWindow" placeholder="Escribe un mensaje..."/>
            </div>
            <div className="footerBarChatWindow">
                <button className="buttonFooterBarChatWindow">Enviar</button>
            </div>
        </div>
    );
}

export default ChatWindow;
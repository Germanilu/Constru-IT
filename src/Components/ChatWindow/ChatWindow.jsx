import React, { useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { userData } from "../../Features/userSlice";
import axios from "axios";
import "./ChatWindow.scss"


const ChatWindow = ({openWindow, setOpenWindow}) => {

    const [loadMessage, setLoadMessage] = useState([])
    const [message, setMessage] = useState({
        message: ""
    })
    console.log(message)

    //Const
    const userInfo = useSelector(userData);
    
    useEffect(() => {
        loadMessageInChat()
    },[loadMessage]); 
    
    useEffect(() => {
        
    })
    
    //Api call to load message
         const loadMessageInChat = async() => {
            try {
                let config = {
                    headers: { Authorization: `Bearer ${userInfo.token}` }
                };
                const attempt = await axios.get(`https://bbobras.onrender.com/api/messages/${openWindow.chatInfo._id}`,config)
                if(attempt.status === 200){
                    setLoadMessage(attempt.data.data)
                }
            } catch (error) {
                console.log(error)
            } 
        }   

        //Function to update the messageHook
        const updateMessage = (data) => {
            setMessage({message: data.currentTarget.value});
        }

        //Request to post new message in chat
        const postNewMessage = async() => {
            try {
                let config = {
                    headers: { Authorization: `Bearer ${userInfo.token}` }
                };
                const attempt = await axios.post(`https://bbobras.onrender.com/api/newMessage/${openWindow.chatInfo._id}`,message,config)
                console.log(attempt)
                if(attempt.status === 200){
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
                                <div className="bodyChatWindowHeader">
                                    <div className="bodyChatWindowName">{e.userName + " " + e.userSurname}</div>
                                    <div className="bodyChatWindowDate">{e.date}</div>
                                </div>
                                <div className="bodyChatWindowMessage">{e.message}</div>
                            </div>
                        );
                    })
                }
            </div>
            <div className="inputChatWindow">
                <textarea type="text" className="inputMessageChatWindow" placeholder="Escribe un mensaje..." onChange={ (e) => updateMessage(e)}/>
            </div>
            <div className="footerBarChatWindow">
                <button className="buttonFooterBarChatWindow" onClick={() => postNewMessage()}>Enviar</button>
            </div>
        </div>
    );
}

export default ChatWindow;
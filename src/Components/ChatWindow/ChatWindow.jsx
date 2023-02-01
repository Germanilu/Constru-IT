import React, { useEffect, useState, useRef} from "react";
import { useSelector } from "react-redux";
import { userData } from "../../Features/userSlice";
import axios from "axios";
import "./ChatWindow.scss"


const ChatWindow = ({openWindow, setOpenWindow}) => {

    const [loadMessage, setLoadMessage] = useState([])
    const [message, setMessage] = useState({
        message: ""
    })
    const [editMessage,SetEditMessage] = useState(false)
    const [focus,setFocus] = useState("")
    
    //Const
    const userInfo = useSelector(userData);
    const messagesEndRef = useRef(null);

    
    useEffect(() => {
    loadMessageInChat()
    },[]); 

    //This useEffect will scroll into view if new message inc hat
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView()
    },[focus])

    
    

    //Api call to load message
    const loadMessageInChat = async() => {
        try {
            let config = {
                headers: { Authorization: `Bearer ${userInfo.token}` }
            };
            //Filter between 2 chats model
            if(openWindow.chatInfo.EmployeeId){
                const attempt = await axios.get(`https://bbobras.onrender.com/api/messagesChat/${openWindow.chatInfo._id}`,config)
                if(attempt.status === 200){
                    setLoadMessage(attempt.data.data)
                }
            }else{
                const attempt = await axios.get(`https://bbobras.onrender.com/api/messages/${openWindow.chatInfo._id}`,config)
                if(attempt.status === 200){
                    setLoadMessage(attempt.data.data)
                    setFocus(loadMessage[loadMessage.length -1]._id)
                 }
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
                if(openWindow.chatInfo.EmployeeId){
                    const attempt = await axios.post(`https://bbobras.onrender.com/api/newMessageTo/${openWindow.chatInfo._id}`,message,config)
                    if(attempt.status === 200){
                        console.log("mensaje enviado")
                        loadMessageInChat()
                    }
                }else{
                    const attempt = await axios.post(`https://bbobras.onrender.com/api/newMessage/${openWindow.chatInfo._id}`,message,config)
                    if(attempt.status === 200){
                        console.log("mensaje enviado")
                        loadMessageInChat()
                    }
                }
            } catch (error) {
                console.log(error)
            }
        }
        
        //This functino will pass the messageData as a parameter and if the owner of the message is not the one interactin with it, will not enable editing,
        //otherwise will allow to edit the message
        const interactWithMessage = (data) => {
            if(editMessage._id === data._id || data.userId !== userInfo.user_id){
                SetEditMessage(false)
            }else{
                SetEditMessage(data)
            }
        }

        //Function to delete message in chat
        const deleteMessage = async (messageData) => {
                try {
                    let config = {
                        headers: { Authorization: `Bearer ${userInfo.token}` }
                    };
                    console.log(messageData._id)
                    const attempt = await axios.delete(`https://bbobras.onrender.com/api/message/${messageData._id}`,config)
                    
                    if(attempt.status === 200){
                        console.log(attempt.data)
                        loadMessageInChat()
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
                    loadMessage.map((e) => {
                        return(
                            <div className="bodyChatWindowResult" key={e._id} onClick={() => interactWithMessage(e)}>
                               
                                <div className="bodyChatWindowHeader">
                                    <div className="bodyChatWindowName">{e.userName + " " + e.userSurname}</div>
                                    <div className="bodyChatWindowDate">{e.date}</div>
                                </div>
                                <div className="bodyChatWindowMessage">
                                   {e.message}
                                </div>
                                {
                                    editMessage._id === e._id?
                                    <div><button className="deleteMessageButton" onClick={(e) => { e.stopPropagation(); deleteMessage(editMessage)}}>Borrar</button></div>
                                    : false
                                }
                            </div>
                        );
                    })
                }

            <div ref={messagesEndRef}></div>
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
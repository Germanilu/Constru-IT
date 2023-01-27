import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {userData} from "../../Features/userSlice"
import axios from "axios"
import "./Chat.scss"

const Chat = () => {

    const [chats, setChats] = useState({})

    console.log(chats)
    //Const
    const userInfo = useSelector(userData);

    useEffect(() => {
       getChat()
    },[])


    const getChat = async() => {
        try {
            let config = {
                headers: { Authorization: `Bearer ${userInfo.token}` }
            };
            const attempt = await axios.get("https://bbobras.onrender.com/api/getallchats",config);
            console.log(attempt)
            if(attempt.status === 200){
                console.log("hola",attempt.data.data[0].clientId)
                setChats(attempt.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div className="chatDesign">

            {chats.length > 0 && (
                chats.map(e => {
                    return(
                        <div key={e.id}>
                            <div className="chatRow">
                                <div className="chatName">
                                {e.clientId} 
                                </div>
                                <div className="chatDate">
                                    {e.date}
                                </div>
                            </div>
                        </div>
                    )
                })
            )}


        </div>
    )
}

export default Chat;
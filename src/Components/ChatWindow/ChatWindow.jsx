import "./ChatWindow.scss"
import { useSelector } from "react-redux";
import { userData } from "../../Features/userSlice";
const ChatWindow = ({openWindow, setOpenWindow}) => {

    //Const
  const userInfo = useSelector(userData);


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
                Call to load messages
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
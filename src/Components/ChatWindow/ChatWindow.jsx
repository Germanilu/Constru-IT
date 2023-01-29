import "./ChatWindow.scss"

const ChatWindow = ({openWindow, setOpenWindow}) => {
    console.log(openWindow)
    return (
        <div className="chatWindowDesign">
            <div className="headerChatWindow">
                <div className="pictChatWindow">img</div>
                <div className="nameChatWindow">Luciano Germani</div>
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
import "./ChatWindow.scss"

const ChatWindow = ({openWindow}) => {
    return (
        <div className="chatWindowDesign">
            <div className="headerChatWindow">
                <div className="pictChatWindow">img</div>
                <div className="nameChatWindow">Luciano Germani</div>
                <div className="closeChatWindow">X</div>
            </div>
            <div className="bodyChatWindow">
                Loading messages
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
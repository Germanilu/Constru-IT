import "./ChatButton.scss";
const ChatButton = ({showChats}) => {
    //Reciving the function to open chat from Dashboard and execute here
    return(
        <div className="chatButtonDesign" onClick={showChats}>
            <p>Chat</p>
        </div>
    );
}

export default ChatButton;
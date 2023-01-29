import "./ChatWindow.scss"

const ChatWindow = ({openWindow}) => {
    return (
        <div className="chatWindowDesign">
            {openWindow.id}
        </div>
    );
}

export default ChatWindow;
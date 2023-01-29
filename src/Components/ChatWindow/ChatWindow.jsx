import "./ChatWindow.scss"

const ChatWindow = ({openWindow}) => {

    

    console.log(openWindow, "estoy en chatwindow")
    return (
        <div className="chatWindowDesign">
            {openWindow.id}
        </div>
    );
}

export default ChatWindow;
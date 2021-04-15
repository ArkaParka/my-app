import messStyle from "../Message/Message.module.css";
import dialog_ava from "../../../images/dialog_ava.JPG"

function Message(props) {
    return (
        <div className={messStyle.message}>
            <div className={messStyle.messageAva}>
                <img src={dialog_ava}></img>
                <div className={messStyle.messageSender}>{props.sender}</div>
            </div>
            <div className={messStyle.messageContent}>{props.messText}</div>
        </div>
    );
}

export default Message;

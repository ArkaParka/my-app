import dialogStyle from "../Dialogs/Dialogs.module.css";
import Message from "./Message/Message";

function Dialogs() {
    return (
        <div className={dialogStyle.dialogContainer}>
            <h1 className={dialogStyle.title}>DIALOGS</h1>
            <div className={dialogStyle.dialogsList}>
                <ul>
                    <li><span>Andrew</span></li>
                    <li><span className={dialogStyle.active}>Dmitry</span></li>
                    <li><span>Sasha</span></li>
                    <li><span>Sveta</span></li>
                    <li><span>Valera</span></li>
                    <li><span>Viktor</span></li>
                    <li><span>This is a list item</span></li>
                    <li><span>Another list item</span></li>
                    <li><span>This is a list item</span></li>
                    <li><span>Yap, another list item</span></li>
                </ul>
            </div>
            <div className={dialogStyle.messages}>
                <Message sender={"Dmitry"} messText={"Text of message1"}/>
                <Message sender={"Me"} messText={"Text of message2"}/>
            </div>

        </div>
    );
}

export default Dialogs;

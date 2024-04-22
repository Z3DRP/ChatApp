import React from "react";
import './ChatMessage.css';
import messageProp from "../../interfaces/props/messageProp";

const ChatMessage = (props: messageProp) => {
    return (
        // class for msg container determines if it is styling for generated or usr msgs
        <li className="chat-item">
            <div className={`msg-${props.message.type}`}>
                <p className="msg-body">{props.message.body}</p>
                <span className="creation-date">{props?.message?.creationDate?.toString() ?? ''}</span>
            </div>
        </li>
    )
}

export default ChatMessage;
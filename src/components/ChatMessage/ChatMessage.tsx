import React from "react";
import './ChatMessage.css';
import messageProp from "../../interfaces/props/messageProp";
import { formatDateTime } from "../../utils/util";

const ChatMessage = (props: messageProp) => {
    const formattedDateTime = formatDateTime(new Date(props?.message?.creationDate));
    return (
        // class for msg container determines if it is styling for generated or usr msgs
        <li className="chat-item">
            <div className={`msg msg-${props.message.type}`}>
                <p className="msg-body">{props.message.body}</p>
                <span className="creation-date">{formattedDateTime ?? ''}</span>
            </div>
        </li>
    )
}

export default ChatMessage;
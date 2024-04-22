import React from "react";
import './PrevChat.css';
import IChat from "../../interfaces/models/IChat";
import chatProps from "../../interfaces/props/chatProps";

const PrevChat = (props: chatProps) => {
    return (
        <li className="chat-item">
            <div className="chat-container">
                <span className="material-symbols-outlined">quick_phrases</span>
                <p className="chat-description">{props.chat.description ?? ''}</p>
                <span className="chat-date">{props?.chat?.chatDate?.toString() ?? ''}</span>
            </div>
        </li>
    )
}

export default PrevChat;
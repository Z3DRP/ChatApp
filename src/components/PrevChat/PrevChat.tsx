import React from "react";
import './PrevChat.css';
import IChat from "../../interfaces/models/IChat";
import chatProps from "../../interfaces/props/chatProps";
import { time } from "console";

const formatTime = (dtArg: Date) => {
    let hours = dtArg.getHours();
    let minutes = dtArg.getMinutes();
    let timeSuffix = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    let mins = minutes < 10 ? `0${minutes}` : `${minutes}`;
    return`${hours}:${mins} ${timeSuffix}`;
}

const PrevChat = (props: chatProps) => {
    const chatDate = new Date(props?.chat?.chatDate);
    let formattedDate = `${chatDate.getMonth() + 1}/${chatDate.getDay()}/${chatDate.getFullYear()}`;
    let formattedTime = formatTime(chatDate);
    return (
        <li className="pchat-item">
            <article className="pchat-container">
                <span className="material-symbols-outlined pmsg-icon">quick_phrases</span>
                <p className="pchat-description">{props.chat.description ?? 'prev chat'}</p>
                <span className="pchat-date">{`${formattedDate} ${formattedTime}` ?? ''}</span>
            </article>
        </li>
    )
}

export default PrevChat;
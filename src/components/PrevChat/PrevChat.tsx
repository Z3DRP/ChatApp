import React, { MouseEventHandler } from "react";
import './PrevChat.css';
import IChat from "../../interfaces/models/IChat";
import chatProps from "../../interfaces/props/chatProps";
import { time } from "console";
import { formatDateShort, formatTime } from "../../utils/util";

const PrevChat = (props: chatProps) => {
    const chatDate = new Date(props?.chat?.chatDate);
    let formattedDate = formatDateShort(new Date(props?.chat?.chatDate));
    let formattedTime = formatTime(new Date(props?.chat?.chatDate));
    const handleChangeChat: MouseEventHandler = (e) => {
        const target = e.currentTarget as HTMLElement;
        props.handleChatChange(target.dataset.chatId as string);
    }
    return (
        <li data-chat-id={props?.chat?._id} className="pchat-item" onClick={handleChangeChat}>
            <article className="pchat-container">
                <span className="material-symbols-outlined pmsg-icon">quick_phrases</span>
                <p className="pchat-description">{props.chat.description ?? 'prev chat'}</p>
                <span className="pchat-date">{`${formattedDate} ${formattedTime}` ?? ''}</span>
            </article>
        </li>
    )
}

export default PrevChat;
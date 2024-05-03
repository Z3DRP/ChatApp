import React, { MouseEventHandler } from "react";
import './ChatList.css';
import chatListProps from "../../interfaces/props/chatListProps";
import PrevChat from "../PrevChat/PrevChat";
import NoPrevChat from "../NoPrevChat/NoPrevChat";

const ChatList = (props: chatListProps) => {

    if (props.chats.length === 0) {
        return <NoPrevChat />;
    }
    
    return (
        <ol className="prev-chat-list">
            {
                props.chats.map(chat => (
                    <PrevChat chat={chat} data-chat-id={chat._id} handleChatChange={props.handleChatChange}/>
                ))
            }
        </ol>
    )
}

export default ChatList;
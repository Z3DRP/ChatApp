import React from "react";
import './MessageList.css';
import messageListProps from "../../interfaces/props/messageListProps";
import NoMessages from "../NoMessages/NoMessages";
import ChatMessage from "../ChatMessage/ChatMessage";

const MessageList = (props: messageListProps) => {
    if (props.messages.length === 0) {
        return <NoMessages />
    }
    return (
        <ol className="message-list">
            {
                props.messages.map(msg => (
                    <ChatMessage message={msg} />
                ))
            }
        </ol>
    )
}

export default MessageList;
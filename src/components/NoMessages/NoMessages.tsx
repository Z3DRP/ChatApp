import React from "react";
import './NoMessages.css';

const NoMessages = () => {
    return (
        <>
        <div>
            <h3 className="no-msg-title">Empty</h3>
        </div>
        <div className='no-msg-container'>
            <p className="container-body">There are no messages in current chat, enter a message to begin chatting.</p>
        </div>
        </>
    )
}

export default NoMessages;
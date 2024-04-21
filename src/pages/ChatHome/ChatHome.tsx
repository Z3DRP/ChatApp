import React, { useState } from "react";
import './ChatHome.css';
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";
import NoMessages from "../../components/NoMessages/NoMessages";
import MessageList from "../../components/MessageList/MessageList";
import IMessage from "../../interfaces/models/IMessage";
import { messageType } from "../../enums/messageType";

const ChatHome = () => {
    // initial state might have to change
    // and the message type might have to change to be data type that is ordered
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [messages, setMessages] = useState([] as IMessage[]);
    let currentMsg: IMessage = {uId: 'u1', type: messageType.userCreated, body: undefined};
    
    // TODO update to async
    const handleSendMsg = () => {
        console.log('sending msg....');
        
        if (currentMsg.body === '' || currentMsg.body === undefined) {
            // showToast
        } else {
            currentMsg.creationDate = new Date();
            setMessages([...messages, currentMsg]);

            setIsLoading(true);
            // then call api to get answer NOTE not sure if causing render with useState bfore api call will cause issues

        }
    };
    const handleMsgChange = (event: any) => currentMsg.body = event.currentTarget.value;

    const loadPrevMessages = () => console.log('loading prev msgs');

    return (
        <>
        <section className="chat-comp">
            <article className="chat-container">
                <div className="chat-window">
                    {
                        isLoading && (
                            <Loader isLoading={isLoading} />
                        )
                    }
                    {
                        !isLoading && <MessageList messages={messages} />
                    } 
                </div>
                <div className="chat-text">
                    <input className="chat-input" type="text" onChange={handleMsgChange} />
                    {/* add google font for icon to click to send msg */}
                    <span className="material-symbols-outlined size-40 dark" onClick={handleSendMsg}>send</span>
                </div>
            </article>
        </section>
        </>
    )
}

export default ChatHome;
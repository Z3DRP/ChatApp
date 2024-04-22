import React, { useEffect, useState } from "react";
import './ChatHome.css';
import Loader from "../../components/Loader/Loader";
import MessageList from "../../components/MessageList/MessageList";
import IMessage from "../../interfaces/models/IMessage";
import { messageType } from "../../enums/messageType";
import messageListProps from "../../interfaces/props/messageListProps";
import { generateMessageId } from "../../utils/idGenerator";

const ChatHome = (props: messageListProps) => {
    // initial state might have to change
    // and the message type might have to change to be data type that is ordered
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // const [messages, setMessages] = useState([] as IMessage[]);
    const [messages, setMessages] = useState(props.messages);
    let currentMsg: IMessage = {uId: generateMessageId(), type: messageType.userCreated, body: undefined, creationDate: new Date()};
    
    const processMessage = (msg: IMessage) => {
        setIsLoading(true);

        const options = {
            method: 'Post',
            body: JSON.stringify({
                message: currentMsg,
                responseType: messageType.generated
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch('https://localhost:8000/chatMessage', options);
                const msgResult = await response.json();

                if (!response.ok) {
                    reject(msgResult);
                } else {
                    resolve(msgResult.message);
                }
            } catch(err) {
                reject(err);
            }
        });
    } 

    // TODO update to async
    const handleSendMsg = () => {
        console.log('sending msg....');
        
        if (currentMsg.body === '' || currentMsg.body === undefined) {
            props.handleError('Error, empty messages cannot be sent.', {type: 'error'});
        } else {
            currentMsg.creationDate = new Date();
            processMessage(currentMsg)
            .then((result) => {
                console.log(`[SUCCESS] message result: ${result}`);
                setMessages([...messages, currentMsg, result as IMessage]);
            })
            .catch(err => {
                console.log(`[ERROR]: ${err}`);
                props.handleError(err, {type: 'error'});
            })
            .finally(() => {
                setIsLoading(false);
            });
        }
    };

    const handleMsgChange = (event: any) => currentMsg.body = event.currentTarget.value;

    useEffect(() => {
        if (props.messages.length === 0) {
            setMessages([]);
        } else {
            let sortedMessages = props.messages.sort((curr, next) => next.creationDate.getTime() - next.creationDate.getTime());
            setMessages(sortedMessages);
        }
    }, [props.messages]);

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
                        !isLoading && <MessageList handleError={props.handleError} messages={messages} />
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
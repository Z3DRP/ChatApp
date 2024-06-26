import React, { useEffect, useState } from "react";
import './ChatHome.css';
import Loader from "../../components/Loader/Loader";
import MessageList from "../../components/MessageList/MessageList";
import IMessage from "../../interfaces/models/IMessage";
import { messageType } from "../../enums/messageType";
import messageListProps from "../../interfaces/props/messageListProps";
import { generateId } from "../../utils/idFactory";

const ChatHome = (props: messageListProps) => {
    // initial state might have to change
    // and the message type might have to change to be data type that is ordered
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // const [messages, setMessages] = useState([] as IMessage[]);
    const [messages, setMessages] = useState(props.messages);
    let currentMsg: IMessage = {_id: generateId('message'), uId: props.userId, type: messageType[messageType.user], body: undefined, creationDate: new Date()};
    
    const processMessage = (msg: IMessage) => {
        setIsLoading(true);

        const options = {
            method: 'Post',
            body: JSON.stringify({
                message: msg,
                prevMessages: messages ?? [],
                isPrevChat: messages.length > 0,
                chatId: props?.chatId
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`http://localhost:8000/chat/message?=${props.userId}`, options);
                
                if (response.ok) {
                    const msgResult = await response.json();
                    resolve(msgResult);
                } else {
                    reject(`${response.status}: ${response.statusText}`);
                }
            } catch(err) {
                reject(err);
            }
        });
    } 

    // TODO update to async
    const handleSendMsg = async () => {
        console.log('sending msg....');
        
        if (currentMsg.body === '' || currentMsg.body === undefined || currentMsg.body.split(' ').length < 3) {
            props.handleError('Error, messages must consist of atleast 3 words.', {type: 'error'});
        } else {
            let input = document.querySelector('.chat-input') as HTMLInputElement;
            input.value = '';
            currentMsg.creationDate = new Date();
            await processMessage(currentMsg)
            .then((result: any) => {
                // TODO update result from type any
                console.log(`[SUCCESS] message result: ${result}`);
                if (!result?.success) {
                    throw new Error(result);
                }
                setMessages([...messages, currentMsg, result?.chatCompletion as IMessage]);
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
            let sortedMessages = props.messages.sort((curr, next) => new Date(next.creationDate).getTime() - new Date(next.creationDate).getTime());
            setMessages(sortedMessages);
        }
    }, [props.messages]);

    return (
        <>
        <section className="chat-comp">
            <article className="chat-container">
                <div className={messages.length > 0 ? 'chat-window window-full' : (!isLoading ? 'chat-window window-empty' : 'chat-loading')}>
                    {
                        isLoading && (
                            <Loader isLoading={isLoading} />
                        )
                    }
                    {
                        !isLoading && <MessageList handleError={props.handleError} messages={messages} isPrevChat={messages.length > 0} />
                    } 
                </div>
                <div className="chat-text">
                    <input className="chat-input" type="text" onChange={handleMsgChange} />
                    {/* add google font for icon to click to send msg */}
                    <span className="material-symbols-outlined size-40 dark chat-btn" onClick={handleSendMsg}>send</span>
                </div>
            </article>
        </section>
        </>
    )
}

export default ChatHome;
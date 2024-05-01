import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import ChatHome from "../../pages/ChatHome/ChatHome";
import IChat from "../../interfaces/models/IChat";
import IMessage from "../../interfaces/models/IMessage";
import { generateChatId } from "../../utils/idGenerator";
import { ToastContainer, toast } from "react-toastify";
import ToastOptions from "../../interfaces/props/toastOptions";
import './AppBody.css';
import BigLoader from "../BigLoader/BigLoader";

// TODO update this so when one of the chat lists is clicked in sidebar event is sent to parent(this) component
// then rerender page and pass true into chatHome which will load prevChat the default for this component
// should be to pass false in to ChatHome which will use default to empty chat window

// look up toastOptions in react-toastify docs
const showToast = (message: string, options: ToastOptions): Promise<void> => {
return new Promise<void>((resolve, reject) => {
    try {
    switch (options.type) {
        case 'success':
        toast.success(message);
        break;
        case 'error':
        toast.error(message);
        break;
        case 'warning':
        toast.warning(message);
        break;
        case 'info':
        toast.info(message);
        break;
    }
    resolve();
    } catch (err) {
    reject();
    }
});
}

const AppBody = () => {
    const [previousChats, setPreviousChats] = useState([] as IChat[]);
    // const [messages, setMessages] = useState([] as IMessage[]);
    const [currentChat, setCurrentChat] = useState<IChat>({} as IChat);
    const [isLoading, setIsLoading] = useState<boolean>();
    const usrId = 1;
    const handleChatChange = (event: any) => {
        let selectedChat = previousChats.filter(chat => chat.cId === event.currentTarget.dataset.cId)[0];
        // setMessages(selectedChat.messages ?? []);
        setCurrentChat(selectedChat);
    }

    useEffect(() => {
        setIsLoading(true);
        const fetchPreviousChats = () => {
            return new Promise(async (resolve, reject) => {
                // const response = await fetch(`https://localhost:443/chat/previous?uid=${usrId}`);
                const response = await fetch(`http://localhost:8000/chat/previous?uid=${usrId}`);
                let result = await response.json();

                if (!response.ok || !result.success) {
                    reject(!result.success ? `[RESPONSE ERROR]: ${result?.message}`:`[RESPONSE ERROR]:: ${response.status}`);
                } else {
                    resolve(result?.chats);
                }
            });
        }

        fetchPreviousChats()
        .then((results: any) => {
            console.log(`prev chat results: ${results}`);
            setPreviousChats(results as IChat[]);
        }).catch(err => {
            console.log(err);
            showToast(err, {type: 'error'});
        }).finally (() => {
            setIsLoading(false);
        });
    }, []);

    return (
        <>
        <div className={isLoading ? 'loading' : 'app-body'}>
            <ToastContainer />
            {
                isLoading && <BigLoader isLoading={isLoading} />
            }
            {
                !isLoading && (

                    <React.Fragment>
                        <div className="sidebar">
                            <Sidebar chats={previousChats} handleChatChange={handleChatChange}/>
                        </div>
                        <div className="chathome">
                            <ChatHome chatId={currentChat?.cId ?? generateChatId()} messages={currentChat?.messages ?? []} handleError={showToast}/>
                        </div>
                    </React.Fragment>
                )
            }
        </div>
        </>
    )
}

export default AppBody;
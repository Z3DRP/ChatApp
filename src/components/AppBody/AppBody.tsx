import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import ChatHome from "../../pages/ChatHome/ChatHome";
import IChat from "../../interfaces/models/IChat";
import IMessage from "../../interfaces/models/IMessage";
import { ToastContainer, toast } from "react-toastify";
import ToastOptions from "../../interfaces/props/toastOptions";

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
    const [messages, setMessages] = useState([] as IMessage[]);

    const handleChatChange = (event: any) => {
        let selectedChat = previousChats.filter(chat => chat.cId === event.currentTarget.dataset.cId)[0];
        setMessages(selectedChat.messages ?? []);
    }

    useEffect(() => {   
        const fetchPreviousChats = () => {
            return new Promise(async (resolve, reject) => {
                const response = await fetch('http://localhost:8000/previousChats');
                let chatResults: IChat[] = await response.json();

                if (!response.ok) {
                    reject(`[RESPONSE ERROR]:: ${response.status}`);
                } else {
                    let sortedChats = chatResults.sort((curr, next) => next?.chatDate.getTime() - curr?.chatDate.getTime());
                    resolve(sortedChats);
                }
            });
        }

        fetchPreviousChats()
        .then((result) => {
            console.log(`prev chat results: ${result}`);
            setPreviousChats(result as IChat[]);
        }).catch(err => {
            console.log(err);
            showToast(err, {type: 'error'});
        });
    }, []);

    return (
        <>
        <ToastContainer />
        <Sidebar chats={previousChats} handleChatChange={handleChatChange}/>
        <ChatHome messages={messages} handleError={showToast}/>
        </>
    )
}

export default AppBody;
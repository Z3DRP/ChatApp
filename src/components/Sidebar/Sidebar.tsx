import React from "react";
import './Sidebar.css';
import chatListProps from "../../interfaces/props/chatListProps";
import PrevChat from "../PrevChat/PrevChat";
import NoPrevChat from "../NoPrevChat/NoPrevChat";
import ChatList from "../ChatList/ChatList";

const Sidebar = (props: chatListProps) => {
    
    return (
        <aside>
            {/* return a list of divs that hold chat objs */}
            <h2 className="prev-chat-title">Previous Chats</h2>
            <div className="prev-chats-container">
                {/* NOTE make scrollable */}
                <ol className="chat-list'">
                    {
                        props.chats.length === 0 && <NoPrevChat />
                    }
                    {   
                        props.chats.length > 0 && <ChatList chats={props.chats} handleChatChange={props.handleChatChange}/>
                    }
                </ol>
            </div>
            <div>

            </div>
        </aside>
    )
}

export default Sidebar;
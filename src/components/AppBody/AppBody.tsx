import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import ChatHome from "../../pages/ChatHome/ChatHome";

// TODO update this so when one of the chat lists is clicked in sidebar event is sent to parent(this) component
// then rerender page and pass true into chatHome which will load prevChat the default for this component
// should be to pass false in to ChatHome which will use default to empty chat window

const AppBody = () => {
    return (
        <>
        <Sidebar />
        <ChatHome />
        </>
    )
}

export default AppBody;
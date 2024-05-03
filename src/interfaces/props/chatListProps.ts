import IChat from "../models/IChat";
import { MouseEvent } from "react";

export default interface chatListProps {
    chats: IChat[];
    handleChatChange: (chatId: string) => void;
}
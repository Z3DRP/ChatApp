import IChat from "../models/IChat";
import { MouseEvent } from "react";

export default interface chatProps {
    chat: IChat;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
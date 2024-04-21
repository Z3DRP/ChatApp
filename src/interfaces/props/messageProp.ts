import { MouseEvent } from "react";
import IMessage from "../models/IMessage";

export default interface messageProp {
    message: IMessage;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

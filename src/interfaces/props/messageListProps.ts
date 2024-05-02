import IMessage from "../models/IMessage";
import ToastOptions from "./toastOptions";

export default interface messageListProps {
    messages: IMessage[] | [];
    isPrevChat?: boolean;
    chatId?: string;
    className?: string;
    userId?: string;
    handleError: (msg: string, options: ToastOptions) => void;
}
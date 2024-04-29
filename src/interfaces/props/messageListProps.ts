import IMessage from "../models/IMessage";
import ToastOptions from "./toastOptions";

export default interface messageListProps {
    messages: IMessage[] | [];
    isPrevChat?: boolean;
    chatId?: string;
    handleError: (msg: string, options: ToastOptions) => void;
}
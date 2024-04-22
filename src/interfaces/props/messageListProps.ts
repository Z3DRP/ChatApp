import IMessage from "../models/IMessage";
import ToastOptions from "./toastOptions";

export default interface messageListProps {
    messages: IMessage[];
    handleError: (msg: string, options: ToastOptions) => void;
}
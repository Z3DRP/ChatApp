import { messageType } from "../../enums/messageType";

export default interface IMessage {
    id?: string | undefined;
    uId: string;
    creationDate?: Date;
    body?: string | undefined | '';
    type: messageType;
}
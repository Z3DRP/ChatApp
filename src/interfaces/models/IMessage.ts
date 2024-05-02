import { messageType } from "../../enums/messageType";

export default interface IMessage {
    _id?: string | undefined;
    uId?: string | undefined;
    creationDate: Date;
    body?: string | undefined | '';
    type?: string | messageType;
}
import IMessage from "./IMessage";

export default interface IChat {
    _id?: string;
    chatDate: Date;
    messages?: IMessage[] | [];
    description?: string | undefined;
}
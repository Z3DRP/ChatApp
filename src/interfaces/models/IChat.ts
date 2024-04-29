import IMessage from "./IMessage";

export default interface IChat {
    cId?: string;
    chatDate: Date;
    messages?: IMessage[] | [];
    description?: string | undefined;
}
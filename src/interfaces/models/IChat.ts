import IMessage from "./IMessage";

export default interface IChat {
    cId?: string | undefined;
    chatDate: Date;
    messages?: IMessage[] | undefined;
    description?: string | undefined;
}
import IMessage from "./IMessage";

export default interface IChat {
    cId?: string;
    chateDate: Date;
    messages?: IMessage[];
}
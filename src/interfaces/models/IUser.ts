import IAddress from "./IAddress";

export default interface IUser {
    _id?: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    address: IAddress | undefined;
    username: string | undefined;
    phoneNumber: string | undefined;
    email: string | undefined;
    password: string | undefined;
}
import { Types } from "mongoose";
export type TPayment = {
    phone: string,
    address: string,
    state: string,
    postal:string,
    cardNumber?:string,
    expiration?:string,
    cvc?:string,
    transactionId:string,
    userId:Types.ObjectId,
    amount:string,
    brainTreeId?:string,
    cartId?:string
}
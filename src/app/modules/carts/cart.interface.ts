import { Types } from "mongoose";
export type TCart = {
    product: Types.ObjectId,
    user: Types.ObjectId,
    quantity: number,
}
export type TProduct = {
    productName: string,
    category: string,
    price: Number,
    image: string,
    description : string,
    sell?: number,
    discount?:string,
    isDiscount?:boolean
}
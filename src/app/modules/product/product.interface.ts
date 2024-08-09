export type TProduct = {
    productName: string,
    category: string,
    price: number,
    image: string,
    description : string,
    sell?: number,
    discount?:number,
    isDiscount?:boolean,
    isSuggestForU?:boolean,
    discountedPrice?:number

}
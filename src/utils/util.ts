
export const calculateDiscountPrice = (price:number,discount:number ) => {
    const discountAmount = (price * discount) / 100;
    const discountedPrice = price - discountAmount;
    return discountedPrice;
  };
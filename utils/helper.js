export const getDiscountedPricePercentage = (original_price,price)=>{
  const discount = original_price - price;
  const discountPrice = (discount/original_price)*100;
  return discountPrice.toFixed(2);
}
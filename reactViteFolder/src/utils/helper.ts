export const returnTotal = (productDetails) => {
  return (
    productDetails.price -
    productDetails.price * productDetails.discountPercentage * 0.01
  ).toFixed(2);
};

export const returnDiscountAmount = (productDetails) => {
  return (
    productDetails.discountPercentage *
    productDetails.price *
    0.01
  ).toFixed(2);
};

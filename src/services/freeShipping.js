export default function freeShiping(product) {
  if (product.shipping && product.shipping.free_shipping) return true;
  return false;
}

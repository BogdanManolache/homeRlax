'use client';

import { type CartItem } from '@/types';
import { useShoppingCart } from 'use-shopping-cart';
import { ShoppingCart } from 'lucide-react';
import { Button } from '../ui/button';

export default function AddToCartButton({
  price_id,
  imageUrl,
  name,
  description,
  currency,
  price,
}: CartItem) {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    price_id,
    imageUrl,
    name,
    description,
    currency,
    price,
  };

  function handleAddToCart() {
    addItem(product);
    handleCartClick();
  }

  return (
    <Button className="flex items-center gap-1" onClick={handleAddToCart}>
      <span className="capitalize">Add to Cart</span>
      <ShoppingCart />
    </Button>
  );
}

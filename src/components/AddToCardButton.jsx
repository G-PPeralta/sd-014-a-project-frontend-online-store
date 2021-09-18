import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

export default function AddToCardButton() {
  return (
    <button
      type="button"
      className="border-top-0
          border
          rounded-bottom
          bg-primary
          text-white
          p-2
          w-100
          "
    >
      Adicionar ao carrinho
      {' '}
      <FaShoppingCart />
    </button>
  );
}

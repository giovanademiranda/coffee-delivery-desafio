'use client'

import { ReactNode, createContext, useState } from 'react';
import Product, { getProductById } from '../../app/data';

interface CartProduct extends Product {
  id: number;
  quantity: number;
}

interface CartContextData {
  cart: CartProduct[],
  addProduct: (id: number, quantity: number) => void,
  removeProduct: (id: number) => void,
  increaseQuantity: (id: number) => void,
  decreaseQuantity: (id: number) => void,
}

export const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const addProduct = (id: number, quantity: number) => {
    const product = getProductById(id);
    if (product) {
      const existingProduct = cart.find(item => item.id === id);
      if (existingProduct) {
        setCart(cart.map(item =>
          item.id === id ? { ...item, quantity: item.quantity + quantity } : item
        ));
      } else {
        setCart([...cart, { ...product, quantity }]);
      }
    }
    return;
  }

  const removeProduct = (id: number) => {
    setCart((currentCart) => currentCart.filter((product) => product.id !== id));
  };

  const increaseQuantity = (id: number) => {
    setCart((currentCart) =>
      currentCart.map((product) =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart((currentCart) =>
      currentCart.map((product) =>
        product.id === id && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

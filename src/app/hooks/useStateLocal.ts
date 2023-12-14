import { CartProduct } from "@/context/CartContext";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function useStateLocal(): [CartProduct[], Dispatch<SetStateAction<CartProduct[]>>] {
  const [cart, setCart] = useState<CartProduct[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('coffee-delivery-cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('coffee-delivery-cart', JSON.stringify(cart));
  }, [cart]);

  return [cart, setCart];
}


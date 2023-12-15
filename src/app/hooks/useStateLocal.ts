import { CartProduct } from "@/context/CartContext";
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";

const isServer = typeof window === 'undefined';

export default function useStateLocal(): [CartProduct[], Dispatch<SetStateAction<CartProduct[]>>] {
  const [cart, setCartLocal] = useState<CartProduct[]>([])
  const inicializeCart = () => {
    if (!isServer) {
      const storedCart = localStorage.getItem('coffee-delivery-cart');
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  }

  useEffect(() => {
    if (!isServer) setCartLocal(inicializeCart());
  }, []);

  const setCart: Dispatch<SetStateAction<CartProduct[]>> = useCallback((newCart) => {
    if (!isServer) {
      const newCartValue = (newCart instanceof Function) ? newCart(cart) : newCart;
      localStorage.setItem('coffee-delivery-cart', JSON.stringify(newCartValue));
      setCartLocal(newCartValue);
    }
  }, [setCartLocal, cart]);

  return [cart, setCart];
}

/*
const [mounted, setMounted] = useState(false);
  const [localWrited, setLocalWrited] = useState(false);
  const [cart, setCart] = useState<CartProduct[]>(() => {
    if (mounted) {
      const storedCart = localStorage.getItem('coffee-delivery-cart');
      setLocalWrited(true);
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const storedCart = localStorage.getItem('coffee-delivery-cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (mounted && localWrited) {
      localStorage.setItem('coffee-delivery-cart', JSON.stringify(cart));
    }
  }, [cart, localWrited, mounted]);
*/


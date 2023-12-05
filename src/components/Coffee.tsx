import Product from "@/app/data";
import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

export default function Coffe({ product }: { product: Product }) {
  const [cart, setCart] = useState<Product[]>([]);
  const [counter, setCounter] = useState(0);

  const addToCart = () => {
    if (counter > 0) {
      setCart(prevCart => [...prevCart, { ...product, quantity: counter }]);
      setCounter(0);
    }
  };
  const increase = () => {
    setCounter(count => count + 1);
  };

  const decrease = () => {
    setCounter(count => count > 0 ? count - 1 : 0);
  };

  return (
    <div className="flex flex-col w-4 h-5 justify-center items-center rounded-e-md rounded- bg-card">
      <Image className="top-96" src={product.image} width={100} height={100} alt="Café" />
      <div className="flex gap-1">{product.tags.map((tag, index) => <p className="flex justify-center items-center py-1 px-2 text-yellow-dark font-bold text-xs rounded-full bg-yellow-light" key={index}>{tag.toUpperCase()}</p>)}
      </div>
      <h3 className="text-subtitle text-center font-baloo text-lg font-bold leading-7">{product.title}</h3>
      <p className="text-label text-center text-sm leading-7">{product.description}</p>
      <div className="flex w-52 justify-between items-center">
        <div className="flex justify-center items-center font-baloo text-2xl font-bold leading-6 text-text">
          <span className="flex justify-center items-center">
            <p className="text-text text-sm leading-7 font-bold">R$</p><h3 className="font-baloo text-2xl text-text leading-6 font-extrabold">{product.value.toFixed(2)}</h3>
          </span>
        </div>
        <div className="flex gap-1 justify-center items-center p-1 rounded-md bg-button text-text border-0">
          <Minus size={14} onClick={decrease} />
          <p className="text-title text-base leading-6">{counter}</p>
          <Plus size={14} onClick={increase} />
        </div>
        <button className="flex p-2 justify-center items-center gap-2 rounded-md bg-purple-dark border-0" type="submit" onClick={addToCart}>
          {cart.map((_item, index) => key = { index })}
          <ShoppingCart size={24} color="#faf9f9" weight="fill" />
        </button>
      </div>
    </div>
  )
}
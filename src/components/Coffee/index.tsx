'use client'

import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react";
import Image from "next/image";
import { useContext, useState } from "react";
import Product from "../../app/data";
import { CartContext } from '../../context/CartContext/index';

export default function Coffee({ product }: { product: Product }) {
  const [counter, setCounter] = useState(1);
  const { addProduct } = useContext(CartContext);

  const addToCart = () => {
    if (counter > 0) {
      addProduct(product.id, counter);
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
    <div className="flex flex-col w-72 h-80 justify-center items-center rounded-tr-3xl rounded-bl-3xl rounded-sm bg-card p-5">
      <Image src={product.image} width={100} height={100} alt="Café" />
      <div className="flex flex-col w-full py-4 items-center">
        <div className="flex gap-2 mb-2">{product.tags.map((tag, product) => <p className="flex justify-center items-center py-1 px-2 text-yellow-dark font-bold text-xs rounded-full bg-yellow-light" key={product}>{tag.toUpperCase()}</p>)}
        </div>
        <h3 className="text-subtitle text-center font-Baloo text-lg font-bold leading-7">{product.title}</h3>
        <p className="text-label text-center text-sm leading-7">{product.description}</p>
      </div>
      <div className="flex gap-9 justify-between">
        <div className="flex font-Baloo text-2xl font-bold leading-6 text-text">
          <span className="flex justify-center items-center">
            <p className="text-text text-sm leading-7 font-bold">R$</p>
            <h3 className="font-Baloo text-2xl text-text leading-6 font-extrabold">{product.value.toFixed(2)}</h3>
          </span>
        </div>
        <div className="flex gap-2">
          <div className="flex gap-2 justify-center items-center p-2 rounded-md bg-button text-text border-0">
            <Minus data-cy="minus" size={16} color='#7f46f7' onClick={decrease} />
            <p className="text-title text-base leading-6">{counter}</p>
            <Plus data-cy="plus" size={16} color='#7f46f7' onClick={increase} />
          </div>
          <button data-cy="add-cart" className="flex p-2 justify-center items-center gap-2 rounded-md bg-purple-dark border-0" type="submit" onClick={addToCart}>
            <ShoppingCart size={24} color="#faf9f9" weight="fill" />
          </button>
        </div>
      </div>
    </div>
  )
}
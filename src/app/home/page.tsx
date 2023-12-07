'use client'

import { Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import Image from 'next/image';
import CartImg from '../../assets/cart.svg';
import CoffeeImg from '../../assets/coffee.svg';
import Coffee from '../../components/Coffee';
import { DataProducts } from '../data';

export default function Home() {
  return (
    <div className="max-w-7xl w-full flex flex-col items-center justify-center px-4 py-4 ">
      <div className="flex w-full justify-center items-center mb-14 mt-4">
        <div className="flex flex-col gap-8">
          <h1 className='w-[90%] font-Baloo 2 text-title text-5xl font-bold leading-10'>Encontre o café perfeito para qualquer hora do dia</h1>
          <p className='text-lg leading-7 text-subtitle'>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <div className="flex flex-row items-center pt-6">
            <div className="flex flex-col items-start gap-4">
              <div className="flex p-2 justify-center items-center mr-4">
                <div className="flex p-2 justify-center items-center mr-4 rounded-full bg-yellow-dark">
                  <ShoppingCart size={16} color='#faf9f9' weight="fill" />
                </div>
                <p>Compra simples e segura</p>
              </div>

              <div className="flex p-2 justify-center items-center mr-4">
                <div className="flex p-2 justify-center items-center mr-4 rounded-full bg-yellow">
                  <Package size={16} color='#faf9f9' weight="fill" />
                </div>
                <p>Entrega rápida e rastreada</p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4">
              <div className="flex p-2 justify-center items-center mr-4">
                <div className="flex p-2 justify-center items-center mr-4 rounded-full bg-text">
                  <Timer size={16} color='#faf9f9' weight="fill" />
                </div>
                <p>Embalagem mantém o café intacto</p>
              </div>

              <div className="flex p-2 justify-center items-center mr-4">
                <div className="flex p-2 justify-center items-center mr-4 rounded-full bg-purple">
                  <Image src={CartImg} width={16} height={16} alt={''} />
                </div>
                <p>O café chega fresquinho até você</p>
              </div>
            </div>
          </div>
        </div>
        <Image src={CoffeeImg} alt='Café' />
      </div>
      <div className="flex w-full">
        <h2 className='font-Baloo 2 font-bold text-3xl text-subtitle'>Nossos cafés</h2>
      </div>
      <div className="w-full grid grid-cols-4 gap-8 mt-10">
        {DataProducts.map(
          (product) => <Coffee key={product.id} product={product} />
        )}
      </div>
    </div>
  )
}

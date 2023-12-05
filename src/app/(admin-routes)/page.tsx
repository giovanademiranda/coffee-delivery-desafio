'use client'

import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';
import Image from 'next/image';
import CoffeeImg from '../../assets/coffee.svg';

export default function Home() {
  return (
    <div className="max-w-7xl w-full flex items-center justify-center pl-4 py-4">
      <div className="flex w-full justify-center items-center">
        <div className="flex flex-col">
          <h1 className='w-[90%] font-baloo gap-4 text-title text-5xl font-bold leading-10'>Encontre o café perfeito para qualquer hora do dia</h1>
          <p className='text-lg leading-7 gap-4 text-subtitle mt-4'>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <div className="flex flex-row items-center pt-16">
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
                  <Coffee size={16} color='#faf9f9' weight="fill" />
                </div>
                <p>O café chega fresquinho até você</p>
              </div>
            </div>
          </div>
        </div>
        <Image src={CoffeeImg} alt='Café' />
      </div>
    </div>
  )
}

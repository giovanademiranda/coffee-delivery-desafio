'use client'

import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import Image from "next/image";
import illustration from '../../assets/illustration.svg';

export default function Success() {
  return (
    <div className="max-w-7xl w-full flex justify-between px-4 py-4">
      <div className="flex flex-col">
        <h2 className="mt-16 font-Baloo text-4xl font-extrabold text-yellow-dark">Uhu! Pedido confirmado</h2>
        <p>Agora é so aguardar que logo o café chegará até você</p>
        <div className="flex w-[80%] pl-8 pr-24 py-8 flex-col items-start gap-8 mt-8 rounded-tr-3xl rounded-bl-3xl rounded-md border border-purple">
          <div className="flex items-center gap-3">
            <div className="flex p-2 justify-center items-center mr-4 rounded-full bg-purple">
              <MapPin size={24} color='#faf9f9' weight="fill" />
            </div>
            <p>Entrega em <strong>Rua João Daniel Martinelli, 102</strong> Farrapos - Porto Alegre, RS</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex p-2 justify-center items-center mr-4 rounded-full bg-yellow">
              <Timer size={24} color='#faf9f9' weight="fill" />
            </div>
            <p>Tempo de entrega: <strong>20 - 30 min</strong></p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex p-2 justify-center items-center mr-4 rounded-full bg-yellow-dark">
              <CurrencyDollar size={24} color='#faf9f9' />
            </div>
            <p>Pagamento na entrega: <strong>Cartão de crédito</strong></p>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-items-end">
        <Image src={illustration} width={500} height={500} alt='Ilustração' />
      </div>
    </div>
  )
}
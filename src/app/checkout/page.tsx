'use client'

import { CartContext } from "@/context/CartContext";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import InputMask from "react-input-mask";
import Product from "../data";

export default function Checkout({ product }: { product: Product }) {
  const { cart, increaseQuantity, decreaseQuantity, removeProduct } = useContext(CartContext);
  const totalItemsValue = cart.reduce((total, product) => total + (product.value * product.quantity), 0);
  const totalOrderValue = totalItemsValue + 3.50;

  return (
    <div className="max-w-7xl w-full flex justify-between p-4">
      <div className="flex flex-col w-[60%]">
        <h2 className="font-Baloo font-bold text-lg text-subtitle mb-4">Complete seu pedido</h2>
        <div className="w-full flex flex-col bg-card p-10 rounded-lg">
          <div className="flex flex-row pb-8">
            <MapPinLine size={24} color='#c47e16' />
            <div className="flex flex-col pl-2 gap-1">
              <h3 className="text-base text-subtitle">Endereço de Entrega</h3>
              <p className="text-sm text-text">Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <InputMask mask="99999-999" className="w-[40%] p-3 bg-input border-2 border-button text-label rounded-md focus:outline-none focus:border-purple" name="CEP" id="CEP" placeholder="CEP" required />
            <input className="p-3 bg-input border-2 border-button text-label rounded-md focus:outline-none focus:border-purple" type="text" name="RUA" id="RUA" placeholder="RUA" required />
            <div className="flex gap-3">
              <input className="w-[40%] p-3 bg-input border-2 border-button text-label rounded-md focus:outline-none focus:border-purple" type="number" name="Numero" id="Numero" placeholder="Número" required />
              <input className="w-[60%] p-3 bg-input border-2 border-button text-label rounded-md focus:outline-none focus:border-purple" type="text" name="Complemento" id="Complemento" placeholder="Complemento" />
            </div>
            <div className="flex gap-3">
              <input className="w-[40%] p-3 bg-input border-2 border-button text-label rounded-md focus:outline-none focus:border-purple" type="text" name="Bairro" id="Bairro" placeholder="Bairro" required />
              <input className="w-[50%] p-3 bg-input border-2 border-button text-label rounded-md focus:outline-none focus:border-purple" type="text" name="Cidade" id="Cidade" placeholder="Cidade" required />
              <input className="w-[10%] p-3 bg-input border-2 border-button text-label rounded-md focus:outline-none focus:border-purple" type="text" name="UF" id="UF" placeholder="UF" required />
            </div>
          </div>
        </div>

        <div className="flex flex-col pt-4">
          <div className="w-full flex flex-col bg-card p-10 rounded-lg">
            <div className="flex flex-row pb-8">
              <CurrencyDollar size={24} color='#7f46f7' />
              <div className="flex flex-col pl-2 gap-1">
                <h3 className="text-base text-subtitle">Pagamento</h3>
                <p className="text-sm text-text">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </div>
            <div className="w-full flex flex-row gap-4">
              <button type="submit" className="w-[33%] flex flex-row p-4 gap-1 items-center justify-start hover:bg-purple-light border-2 focus:bg-purple-light focus:border-purple bg-button rounded-lg">
                <CreditCard size={20} color='#7f46f7' />
                <p className="text-sm text-text">CARTÃO DE CRÉDITO</p>
              </button>
              <button type="submit" className="w-[33%] flex flex-row p-4 gap-1 items-center justify-start hover:bg-purple-light border-2 focus:bg-purple-light focus:border-purple  bg-button rounded-lg">
                <Bank size={20} color='#7f46f7' />
                <p className="text-sm text-text">CARTÃO DE DÉBITO</p>
              </button>
              <button type="submit" className="w-[33%] flex flex-row p-4 gap-3 items-center justify-start hover:bg-purple-light border-2 focus:bg-purple-light focus:border-purple  bg-button rounded-lg">
                <Money size={20} color='#7f46f7' />
                <p className="text-sm text-text">DINHEIRO</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[40%]">
        <div className="flex flex-col px-4 pb-4">
          <h2 className="font-Baloo font-bold text-lg text-subtitle mb-4">Cafés selecionados</h2>
          <div className="w-full flex flex-col bg-card p-10 rounded-tr-3xl rounded-bl-3xl rounded-md">
            {cart.map((product, index) => (
              <div key={index} className="flex flex-row border-b-2 pb-6 pt-4 justify-between">
                <div className="flex gap-5">
                  <Image src={product.image} alt={"Café selecionado"} width={64} height={64} />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base text-subtitle">{product.title}</h3>
                    <div className="flex flex-row gap-2">
                      <div className="flex gap-2 justify-center items-center p-1 rounded-md bg-button text-text">
                        <Minus size={14} color='#7f46f7' onClick={() => decreaseQuantity(product.id)} />
                        <p className="text-title text-base leading-6">{product.quantity}</p>
                        <Plus size={14} color='#7f46f7' onClick={() => increaseQuantity(product.id)} />
                      </div>
                      <button type="submit" className="flex flex-row items-center gap-1 px-2 bg-button rounded-md" onClick={() => removeProduct(product.id)}>
                        <Trash size={16} color='#7f46f7' />
                        <p className="text-text text-xs">REMOVER</p>
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-text font-bold">R$ <span>{product.value.toFixed(2)}</span></p>
              </div>
            ))}
            <div className="flex flex-col gap-3 mt-3">
              <div className="flex flex-row justify-between">
                <p className="text-sm text-text">Total de itens</p>
                <p className="text-base text-text">R$ <span>{totalItemsValue.toFixed(2)}</span></p>
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-sm text-text">Entrega</p>
                <p className="text-base text-text">R$ <span>3,50</span></p>
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-xl font-bold text-subtitle">Total</p>
                <p className="text-xl font-bold text-subtitle">R$ <span>{totalOrderValue.toFixed(2)}</span></p>
              </div>
              <Link href="/success" type="submit" className="flex items-center justify-center bg-yellow hover:bg-yellow-dark p-3 rounded-md">
                <p className="text-white text-sm font-bold">CONFIRMAR PEDIDO</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

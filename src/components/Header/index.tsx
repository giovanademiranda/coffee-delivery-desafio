'use client'

import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <header className="flex max-w-7xl justify-between items-center p-5">
      <div className="flex">
        <Image src={Logo} alt="Logotipo" priority />
      </div>
      <nav className="flex items-center justify-center text-center">
        <div className="flex p-2 justify-center items-center gap-1 m-2 rounded-md bg-purple-light">
          <MapPin size={24} color="#8047F8" weight="fill" />
          <p className='text-sm text-center text-purple-dark leading-6'>Sorocaba-SP</p>
        </div>
        <Link href="/cart" className="flex relative p-2 justify-center items-center gap-1 m-2 rounded-md bg-yellow-light">
          <ShoppingCart size={24} color="#C47F17" weight="fill" />
          <p className='absolute flex justify-center items-center -top-2 -right-2 w-5 h-5 text-center text-white rounded-full bg-yellow-dark text-sm'>3</p>
        </Link>
      </nav>
    </header>
  )
}
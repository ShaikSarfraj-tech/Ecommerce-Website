"use client"

import React from 'react'
import { SearchBar } from './SearchBar'
import { Heart, ShoppingCart } from 'iconsax-react'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const router = useRouter()
    return (
        <div className='w-full px-16 h-[10%] flex items-center '>
            <ul className='flex flex-row justify-between items-center w-full '>
                <li className=' text-2xl font-bold italic'>SS Fashions</li>
                <div className='flex flex-row space-x-6 text-gray-400 font-semibold'>
                    <li className='text-black'>Shop</li>
                    <li className='cursor-pointer' onClick={() => router.push('/products')}>Men</li>
                    <li>Women</li>
                    <li>Combos</li>
                    <li>Joggers</li>
                </div>
                <li>
                    <SearchBar />
                </li>
                <div className='flex flex-row space-x-2'>
                    <li className='bg-gray-100 flex items-center justify-center p-2 rounded-lg'><Heart size="22" /></li>
                    <li className='bg-gray-100 flex items-center justify-center p-2 rounded-lg'>
                        {/* <User size="22" /> */}
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </li>
                    <li className='bg-gray-100 flex items-center justify-center p-2 rounded-lg'><ShoppingCart size="22" /></li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar

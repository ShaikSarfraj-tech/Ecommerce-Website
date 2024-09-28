import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full px-16 h-[10%] flex items-center'>
            <ul className='flex flex-row justify-between w-full'>
                <li>Logo</li>
                <div className='flex flex-row space-x-6'>
                    <li>Shop</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Combos</li>
                    <li>Joggers</li>
                </div>
                <li>Search Bar</li>
                <div className='flex flex-row space-x-2'>
                    <li>Wishlist</li>
                    <li>Account</li>
                    <li>Cart</li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar

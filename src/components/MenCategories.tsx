import React from 'react'
import CategoryCard from './CategoryCard'
import shirts_image from '../../public/images/shirts_image.jpg'
import printed_tshirts from '../../public/images/printed_tshirts.jpg'
import plain_tshirts from '../../public/images/plain_tshirts.jpg'
import polo_tshirts from '../../public/images/polo_tshirts.jpg'
import sweat_shirt from '../../public/images/sweat_shirt.jpg'
import jeans from '../../public/images/jeans.jpg'
import active_wear from '../../public/images/active_wear.jpg'
import rain_wear from '../../public/images/rain_wear.jpg'

const MenCategories = () => {
    return (
        <div className='w-full  p-8'>
            <h2 className='text-3xl font-bold'>Categories for Men</h2>
            <div className='w-full grid grid-cols-4 gap-4 mt-4'>
                <CategoryCard categoryType="Shirts" categoryImg={shirts_image} />
                {/* <CategoryCard categoryType="Shirts" categoryImg={shirts_image} /> */}
                <CategoryCard categoryType="Printed T-Shirts" categoryImg={printed_tshirts} />
                <CategoryCard categoryType="Plain T-Shirts" categoryImg={plain_tshirts} />
                <CategoryCard categoryType="Polo T-Shirts" categoryImg={polo_tshirts} />
                <CategoryCard categoryType="Hoodies and Sweat Shirts" categoryImg={sweat_shirt} />
                <CategoryCard categoryType="Jeans" categoryImg={jeans} />
                <CategoryCard categoryType="Active Wear" categoryImg={active_wear} />
                <CategoryCard categoryType="Rain Wear" categoryImg={rain_wear} />
            </div>
        </div>
    )
}

export default MenCategories
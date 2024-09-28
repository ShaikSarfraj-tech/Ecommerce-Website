import Image from 'next/image'
import React from 'react'
import menClothImage from '../../public/images/men cloth2 image.jpg'
import { ArrowRight } from 'iconsax-react'

const CategoryCard = () => {
    return (
        <div>
            <Image alt='category image' className='rounded-lg' width={300} height={150} src={menClothImage} />
            <div className='flex flex-row justify-between mt-4'>
                <h2 className='text-lg font-semibold '>Shirts</h2>
                <ArrowRight size="32" className='mr-2' />
            </div>
            <h4>Explore Now!</h4>
        </div>
    )
}

export default CategoryCard
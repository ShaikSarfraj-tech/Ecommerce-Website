"use client"
import Image from 'next/image';
import React from 'react';
import { ArrowRight } from 'iconsax-react';
import { useRouter } from 'next/navigation'


const CategoryCard = ({ categoryType, categoryImg }: { categoryType: String, categoryImg: any }) => {
    const router = useRouter()

    return (
        <div className='border border-gray-200 p-4 rounded-lg'>
            <div className='relative w-[250px] h-[300px]'>
                <Image
                    alt='category image'
                    className='rounded-lg'
                    src={categoryImg}
                    layout='fill' // Ensures the image fills the container
                    objectFit='cover' // Adjusts the image to cover the container without distortion
                    quality={100} // Maintains the image quality
                />
            </div>
            <div className='flex flex-row justify-between mt-4'>
                <h2 className='text-lg font-semibold'>{categoryType}</h2>
                <ArrowRight onClick={() => router.push('/products')} size="32" className='mr-2 cursor-pointer' />
            </div>
            <h4>Explore Now!</h4>
        </div>
    );
}

export default CategoryCard;

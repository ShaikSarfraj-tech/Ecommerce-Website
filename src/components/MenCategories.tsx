import React from 'react'
import CategoryCard from './CategoryCard'

const MenCategories = () => {
    return (
        <div className='w-full  p-8'>
            <h2 className='text-3xl font-bold'>Categories for Men</h2>
            <div className='w-full grid grid-cols-4 gap-4 mt-4'>
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </div>
        </div>
    )
}

export default MenCategories
"use client"
import { CategoryType } from '@/@types/CategoryType'
import { MetaType } from '@/@types/MetaType'
import CategoryCard from '@/components/CategoryCard'
import Heading from '@/components/Heading'
import { getQueryData } from '@/lib/getQueryData'
import React, { FC } from 'react'

interface CategoryPageType {
    categories: { data: CategoryType[], meta: MetaType }
}

const Category: FC<CategoryPageType> = ({ categories }) => {
    const { data: categoriesList } = getQueryData("/categories", categories, 'category')
    return (
        <section className='py-[80px]'>
            <div className="containers">
                <Heading tag='h2' classList='!mb-[60px]'>Browse Categories</Heading>
                <div className='flex ] justify-between flex-wrap space-y-[30px] gap-[10px]'>
                    {categoriesList?.data?.map((item: CategoryType) => <CategoryCard key={item.id} item={item} />)}
                </div>
            </div>
        </section>
    )
}

export default Category
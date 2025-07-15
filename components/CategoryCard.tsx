import { CategoryType } from '@/@types/CategoryType'
import { API } from '@/hooks/getEnv'
import Image from 'next/image'
import React, { FC } from 'react'
import Heading from './Heading'

const CategoryCard: FC<{ item: CategoryType }> = ({ item }) => {
    return (
        <div className='cursor-pointer hover:scale-[1.05] duration-300 w-[240px] h-[316px] bg-[#FFFFFF1A] overflow-hidden rounded-[20px]'>
            <div className='relative'>
                <div className='absolute flex items-center justify-center w-full backdrop-blur-[10px] h-full'>
                    <Image className=' w-[100px] h-[100px] z-[-1]' src={`${API}/file/${item.icon}`} alt='Category icon' width={100} height={100} priority />
                </div>
                <Image className='w-[240px] h-[240px] z-[-1]' src={`${API}/file/${item.image}`} alt='Category img' width={240} height={240} priority />
            </div>
            <div className='py-[20px] px-[30px]'>
                <Heading classList='!text-[22px]' tag='h3'>{item.name}</Heading>
            </div>
        </div>
    )
}
export default CategoryCard
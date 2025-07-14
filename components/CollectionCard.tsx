import { CollectionType } from '@/@types/CollectionType'
import { API } from '@/hooks/getEnv'
import Image from 'next/image'
import React, { FC } from 'react'
import Button from './Button'
import Heading from './Heading'
import Text from './Text'

const CollectionCard: FC<{ item: CollectionType }> = ({ item }) => {
    return (
        <div className='w-[330px]'>
            <Image className='w-[330px] rounded-[20px] object-cover h-[330px] mb-[15px]' src={`${API}/file/${item.images[0]}`} alt='Collection img' width={330} height={330} priority />
            <div className='flex justify-between'>
                <Image className='w-[100px] rounded-[20px] object-cover h-[100px] mb-[15px]' src={`${API}/file/${item.images[1]}`} alt='Collection img' width={100} height={100} priority />
                <Image className='w-[100px] rounded-[20px] object-cover h-[100px] mb-[15px]' src={`${API}/file/${item.images[2]}`} alt='Collection img' width={100} height={100} priority />
                <Button type='button' variant='filled' extraClass='!w-[100px] !text-[22px] !flex !items-center !justify-center !h-[100px]' title={`${item.images.length}+`} />
            </div>
            <Heading classList='!mb-[10px] !line-clamp-1' tag='h3'>{item.title}</Heading>
            <div className='flex items-center gap-[12px]'>
                <Image className='w-[24px] rounded-full object-cover h-[24px]' src={`${API}/file/${item.creator.image}`} alt='Creator img' width={24} height={24} priority />
                <Text classList='!text-[18px] !text-[#FFFFFF]'>{item.creator.username}</Text>
            </div>
        </div>
    )
}

export default CollectionCard
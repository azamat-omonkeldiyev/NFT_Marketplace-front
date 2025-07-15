import { NftType2 } from '@/@types/NftType'
import { API } from '@/hooks/getEnv'
import Image from 'next/image'
import React, { FC } from 'react'
import Heading from './Heading'
import Text from './Text'

const NftCard: FC<{ item: NftType2 }> = ({ item }) => {
    return (
        <div className='w-[330px] bg-[#FFFFFF1A] rounded-[20px] overflow-hidden'>
            <Image className='w-[330px] h-[296px]' src={`${API}/file/${item.image}`} alt='Category img' width={330} height={296} priority />
            <div className='py-[20px] px-[30px]'>
                <div className='mb-[25px]'>
                    <Heading classList='!text-[22px] !mb-[5px]' tag='h3'>{item.title}</Heading>
                    <div className='flex items-center gap-[12px]'>
                        <Image className='w-[24px] h-[24px] rounded-full' src={`${API}/file/${item.creator.image}`} alt='Creator img' width={24} height={24} priority />
                        <Text>{item.creator.username}</Text>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='w-[50%]'>
                        <Text classList='!text-[12px] !text-[#858584] !mb-[8px]'>Price</Text>
                        <Text classList='!text-[#FFFFFF]'>{item.price ? item.price : 0} ETH</Text>
                    </div>
                    <div className='w-[50%] text-end'>
                        <Text classList='!text-[12px] !text-[#858584] !mb-[8px]'>Highest Bid</Text>
                        <Text classList='!text-[#FFFFFF]'>{item.highestBid ? item.highestBid : 0} wETH</Text>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NftCard
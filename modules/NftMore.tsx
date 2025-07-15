"use client"
import { MetaType } from '@/@types/MetaType'
import { NftType2 } from '@/@types/NftType'
import { EyeIcon } from '@/assets/icons'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import NftCard from '@/components/NftCard'
import Text from '@/components/Text'
import { getQueryData } from '@/lib/getQueryData'
import React, { FC } from 'react'


interface NftPageType {
    nft: { data: NftType2[], meta: MetaType }
}

const NFTMore: FC<NftPageType> = ({ nft }) => {
    const { data: nftList } = getQueryData("/nfts?limit=3", nft, 'nft')
    return (
        <section className='py-[80px]'>
            <div className="containers">
                <div className='flex mb-[60px] justify-between items-end'>
                    <div>
                        <Heading classList='!mb-[10px]' tag='h2'>Discover More NFTs</Heading>
                        <Text classList='!text-white !text-[22px]'>Explore new trending NFTs</Text>
                    </div>
                    <Button extraClass='!px-[50px]' type='button' variant='outlined' icon={<EyeIcon />} iconPostion='left' title='See All' />
                </div>
                <div className='flex justify-between gap-[10px]'>
                    {nftList?.data?.map((item:NftType2) => <NftCard key={item.id} item={item}/>)}
                </div>
            </div>
        </section>
    )
}

export default NFTMore
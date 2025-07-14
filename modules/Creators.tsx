"use client"
import { ArtistType } from '@/@types/ArtistType'
import { MetaType } from '@/@types/MetaType'
import { RocketIcon } from '@/assets/icons'
import ArtistsCard from '@/components/ArtistsCard'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Text from '@/components/Text'
import { getQueryData } from '@/lib/getQueryData'
import React, { FC } from 'react'

interface ArtistPageType {
    artists: { data: ArtistType[], meta: MetaType }
}
const Creators: FC<ArtistPageType> = ({ artists }) => {
    const { data: artistsList, isLoading, error } = getQueryData("/user?role=ARTIST&limit=12", artists, 'artists')
    return (
        <section className='py-[80px]'>
            <div className="containers">
                <div className='flex mb-[60px] justify-between items-end'>
                    <div>
                        <Heading classList='!mb-[10px]' tag='h2'>Top creators</Heading>
                        <Text classList='!text-white !text-[22px]'>Checkout Top Rated Creators on the NFT Marketplace</Text>
                    </div>
                    <Button type='button' variant='outlined' icon={<RocketIcon/>} iconPostion='left' title='View Rankings'/>
                </div>
                <div className='flex flex-wrap justify-between gap-[30px]'>
                    {artistsList?.data.map((item:ArtistType, index:number) => <ArtistsCard key={item.id} item={item} index={index}/>)}
                </div>
            </div>
        </section>
    )
}

export default Creators
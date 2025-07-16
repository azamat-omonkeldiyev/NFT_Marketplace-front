"use client"
import { ArtistType } from '@/@types/ArtistType'
import { NftType } from '@/@types/NftType'
import NftCard from '@/components/NftCard'
import { Context } from '@/context/Context'
import React, { useContext } from 'react'

const Created = () => {
  const { singleArtistData }: { singleArtistData: ArtistType | {} } = useContext(Context)
  return (
    <div className='bg-[#3B3B3B]'>
      <div className='containers flex justify-between gap-y-[30px] gap-x-[10px] !py-[80px]'>
        {(singleArtistData as ArtistType)?.createdNFTs?.map((item: NftType) => <NftCard key={item.id} item={item} name={(singleArtistData as ArtistType).username} imgURL={(singleArtistData as ArtistType).image} />)}
      </div>
    </div>
  )
}

export default Created
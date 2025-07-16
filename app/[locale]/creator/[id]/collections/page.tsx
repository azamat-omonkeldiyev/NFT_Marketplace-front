"use client"
import { ArtistType } from '@/@types/ArtistType'
import { CollectionType } from '@/@types/CollectionType'
import { NftType, NftType2 } from '@/@types/NftType'
import CollectionCard from '@/components/CollectionCard'
import NftCard from '@/components/NftCard'
import { Context } from '@/context/Context'
import React, { useContext } from 'react'

const Collection = () => {
  const { singleArtistData }: { singleArtistData: ArtistType | {} } = useContext(Context)
  console.log(singleArtistData);
  
  return (
    <div className='bg-[#3B3B3B]'>
      <div className='containers flex justify-between gap-y-[30px] gap-x-[10px] !py-[80px]'>
        {(singleArtistData as ArtistType)?.collections?.map((item:CollectionType ) => <CollectionCard name={(singleArtistData as ArtistType).username} imgURL={(singleArtistData as ArtistType).image} key={item.id} item={item}/>)}
      </div>
    </div>
  )
}

export default Collection
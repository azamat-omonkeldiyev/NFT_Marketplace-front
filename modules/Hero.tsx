"use client"
import { ArtistType } from '@/@types/ArtistType'
import { AuctionType } from '@/@types/AuctionType'
import { MetaType } from '@/@types/MetaType'
import { RocketIcon } from '@/assets/icons'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Text from '@/components/Text'
import { getQueryData } from '@/lib/getQueryData'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React, { FC } from 'react'

interface HeroType {
  actions:{data:AuctionType[], meta:MetaType},
  artists:{data:ArtistType[], meta:MetaType},
  actionResults:{data:any[], meta:MetaType}
}

const Hero:FC<HeroType> = ({actions, artists, actionResults}) => {
  const t = useTranslations("HeroContent")
  const {data:actionsList, isLoading:actionLoading} = getQueryData("/auctions", actions,'auctions')
  const {data:artistsList, isLoading:artistLoading} = getQueryData("/user?role=ARTIST", artists,'artist')
  const {data:actionResultsList, isLoading:actionResultsLoading} = getQueryData("/auction-result", actionResults,'auction-results')
  return (
    <section className='py-[80px]'>
      <div className='containers  flex flex-col md:flex-row gap-[10px] justify-between'>
        <div className='md:w-[50%]'>
          <Heading tag='h1' classList='!mb-[20px]'>{t("title")}</Heading>
          <Text classList='!text-[16px] lg:!text-[22px] !mb-[20px] lg:!mb-[30px]'>{t("text")}</Text>
          <Button extraClass='!px-[50px]' title={t("buttonContent")} icon={<RocketIcon />} iconPostion='left' type='button' variant='filled' />
          <div className='!mt-[20px] lg:mt-[36px] flex gap-[30px]'>
            <div>
              <Heading classList='' tag='h3'>{actionResultsLoading ? "0" : actionResultsList.meta.total}</Heading>
              <Text classList='!text-[16px] lg:!text-[23.99px] leading-[160%]'>{t("totalSale")}</Text>
            </div>
            <div>
              <Heading tag='h3'>{actionLoading ? "0" : actionsList.meta.total}</Heading>
              <Text classList='!text-[16px] lg:!text-[23.99px] leading-[160%]'>{t("auctions")}</Text>
            </div>
            <div>
              <Heading tag='h3'>{artistLoading ? "0" : artistsList.meta.total}</Heading>
              <Text classList='!text-[16px] lg:!text-[23.99px] leading-[160%]'>{t("artists")}</Text>
            </div>
          </div>
        </div>
        <div className='mx-auto md:mx-0 mt-[40px] md:mt-0 md:w-[330px] lg:w-[510px] self-start bg-[#3B3B3B] rounded-[20px] overflow-hidden'>
          <Image className='w-[510px] h-[221px] object-cover lg:h-[401px]' src={'/hero-img.png'} alt='Hero img' width={510} height={401} priority />
          <div className='py-[22px] px-[20px]'>
            <Heading classList='!text-[22px]' tag='h3'>Space Walking</Heading>
            <div className='flex items-center gap-[12px] mt-[10px]'>
              <Image className='w-[24px] h-[24px]' src={'/animakid.svg'} alt='Animakid img' width={24} height={24} priority />
              <Text classList='!text-[18px]'>Animakid</Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
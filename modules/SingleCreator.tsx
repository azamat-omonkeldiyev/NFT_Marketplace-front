"use client"
import { ArtistType } from '@/@types/ArtistType'
import { CopyIcon, Discord, GlobalIcon, Instagram, PlusIcon, Twitter, YouTube } from '@/assets/icons'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Text from '@/components/Text'
import { Context } from '@/context/Context'
import { API } from '@/hooks/getEnv'
import { Link, usePathname } from '@/i18n/navigation'
import { getQueryData } from '@/lib/getQueryData'
import Image from 'next/image'
import React, { FC, useContext, useEffect, useState } from 'react'

function shortenId(input: string): string {
    return input.replace(/^(.{6}).+(.{4})$/, "$1...$2");
}
const SingleCreator: FC<{ singleCreateData: ArtistType, id: string }> = ({ singleCreateData, id }) => {
    const {setSingleAritstData} = useContext(Context)
    const { data: SingleArtist }: { data: ArtistType } = getQueryData(`/user/${id}`, singleCreateData, 'single_creator', id)
    const links = [<GlobalIcon />, <Discord />, <YouTube />, <Twitter />, <Instagram />]
    function handleCopy() {
        navigator.clipboard.writeText(id).then(() => {
            alert("Copied")
        })
    }
    const pathname = usePathname()

    useEffect(() => {
        setSingleAritstData(SingleArtist)
    },[])
    return (
        <div>
            <div style={{ backgroundImage: "url(/single-bg.svg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className='h-[320px] '></div>
            <div className='containers'>
                <Image className='w-[120px] mt-[-60px] h-[120px] mb-[40px]' src={`${API}/file/${SingleArtist.image}`} alt='Artist img' width={120} height={120} priority />
                <div className='!mb-[40px] flex justify-between'>
                    <div>
                        <Heading classList='!text-[51px] !mb-[30px]' tag='h1'>{singleCreateData.username}</Heading>
                        <div className='flex items-center gap-[20px] !mb-[30px]'>
                            <div className='w-[156px]'>
                                <strong className='text-[28px] leading-[140%] text-white'>250k+</strong>
                                <Text classList='!text-[22px]'>Volume</Text>
                            </div>
                            <div className='w-[156px]'>
                                <strong className='text-[28px] leading-[140%] text-white'>50k+</strong>
                                <Text classList='!text-[22px]'>NFTs Sold</Text>
                            </div>
                            <div className='w-[156px]'>
                                <strong className='text-[28px] leading-[140%] text-white'>300k+</strong>
                                <Text classList='!text-[22px]'>Followers</Text>
                            </div>
                        </div>
                        <Text classList='!text-[22px] !text-[#858584] !mb-[10px]'>Bio</Text>
                        <Text classList='!text-[22px] !text-white !mb-[30px]'>{SingleArtist.bio}</Text>
                        <div>
                            <Text classList='!text-[22px] !text-[#858584]'>Links</Text>
                            <div className='flex gap-[10px] mt-[10px]'>
                                {links.map((item, index) => <Link key={index} href={"#"}>{item}</Link>)}
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-[20px] self-start'>
                        <Button onClick={() => handleCopy()} variant='filled' type='button' icon={<CopyIcon />} iconPostion='left' title={shortenId(id)} />
                        <Button variant='outlined' type='button' icon={<PlusIcon />} iconPostion='left' title={'Follow'} />
                    </div>
                </div>
                <div className='flex'>
                    <Link href={`/creator/${id}`} className={`${!pathname.includes("owned") && !pathname.includes("collections") ? "border-[#858584]":"border-transparent"} border-b-[2px] w-[33%] flex items-center cursor-pointer gap-[16px] justify-center py-[15px] text-center`}>
                        <span className='text-[22px] text-white leading-[140%]'>Created</span>
                        <button className='bg-[#858584] text-white py-[5px] px-[10px] rounded-[20px]'>{SingleArtist.createdNFTs.length}</button>
                    </Link>
                    <Link href={`/creator/${id}/owned`} className={`${pathname.includes("owned") ? "border-[#858584]":"border-transparent"} border-b-[2px] w-[33%] flex items-center cursor-pointer gap-[16px] justify-center py-[15px] text-center`}>
                        <span className='text-[22px] text-white leading-[140%]'>Owned</span>
                        <button className='bg-[#858584] text-white py-[5px] px-[10px] rounded-[20px]'>{SingleArtist.ownedNFTs.length}</button>
                    </Link>
                    <Link href={`/creator/${id}/collections`} className={`${pathname.includes("collections") ? "border-[#858584]":"border-transparent"} border-b-[2px] w-[33%] flex items-center cursor-pointer gap-[16px] justify-center py-[15px] text-center`}>
                        <span className='text-[22px] text-white leading-[140%]'>Collections</span>
                        <button className='bg-[#858584] text-white py-[5px] px-[10px] rounded-[20px]'>{SingleArtist.collections.length}</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SingleCreator
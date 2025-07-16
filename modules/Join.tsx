import { MessageIcon } from '@/assets/icons'
import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Input from '@/components/Input'
import Image from 'next/image'
import React from 'react'

const Join = () => {
  return (
    <section className='!my-[80px] containers'>
        <div className='flex flex-col md:flex-row gap-[30px] items-center p-[60px] justify-between rounded-[20px] md:bg-[var(--clr-grey)]'>
            <div className="">
                <Image src={"/spaceMan.svg"} alt='spaceMan' width={425} height={310} priority className='w-[425px] object-cover h-[310px] rounded-[20px]'/>
            </div>
            <div className="max-w-[425px] space-y-[10px]">
                <Heading tag='h2' classList='!text-[28px] lg:!text-[38px]'>Join our weekly digest</Heading>
                <p className='lg:text-[22px]'>Get exclusive promotions & updates straight to your inbox.</p>
                <div className="space-y-4 lg:space-y-0 lg:flex lg:bg-white justify-between rounded-[20px] mt-[30px] w-full"><Input type='email' classList='!w-full' placeholder="Enter your email here"/> <Button extraClass='!w-full' title={"Subscribe"} type='button' variant='filled' icon={<MessageIcon />} iconPostion='left'/></div>
            </div>
        </div>
    </section>
  )
}

export default Join
"use client"
import Button from '@/components/Button'
import { useRouter } from 'next/navigation'
import React from 'react'

const NotFound = () => {
    const router = useRouter()
  return (
    <div className='flex items-center justify-center mt-[100px]'>
        <Button onClick={() => router.push("/")} title='Go Home Page' type='button' variant='filled'/>
    </div>
  )
}

export default NotFound
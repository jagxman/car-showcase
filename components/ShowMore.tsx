"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { ShowMoreProps } from '@/types'
import { Button } from '.'
import { updateSearchParams } from '@/utils'

const ShowMore = ({pageNumber, isNext}:ShowMoreProps) => {


    const router = useRouter();

    const handleNav = () => {


        const newLimit = (pageNumber + 1) * 10;

        const newPathname = updateSearchParams("limit", String(newLimit));


        router.push(newPathname, {scroll: false});

    }


  return (
    <div className='w-full flex-center gap-5 mt-10'>
        {!isNext && (
            <Button title='Show More' btnType='button' containerStyles='bg-primary-blue rounded-full text-white' handleClick={handleNav}/>
        )}

    </div>
  )
}

export default ShowMore

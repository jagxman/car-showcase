"use client"
import { CarProps } from '@/types'
import {useState} from 'react'
import Image from 'next/image'


interface cardCardProps {
  car: CarProps
}



const CarCard = ( {car}:cardCardProps) => {
  return (
    <div>
    {car?.year}
    </div>
  )
}

export default CarCard

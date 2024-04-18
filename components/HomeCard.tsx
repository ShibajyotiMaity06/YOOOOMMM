import { cn } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ( {className , img , title , description , handleClick}:HomeCardProps) => {
  return (
            <div className={cn('px-4 py-6 flex flex-col justify-between w-full xl:max-[270px] min-h-[260px] rounded-lg cursor-pointer',className)} onClick={handleClick}>
            <div className="flex-center glassmorphism size-12 rounded-lg">
                <Image src={img} alt="meeting" width={27} height={27} />
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-lg font-light">{description}</p>
            </div>
        </div>
  )
}

export default HomeCard
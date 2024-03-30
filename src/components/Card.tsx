import Image from 'next/image'
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';
import { useState } from 'react';

export default function Card ({massageShopName, imgSrc, onCompare} : {massageShopName:string, imgSrc:string, onCompare?:Function}) {
    // const [value, setValue] = useState(5);

    return (
        <InteractiveCard>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}
                alt='Product Picture'
                fill={true}
                className='object-cover rounded-t-lg'/>
            </div>
            <div className='w-full h-[15%] p-[20px] text-black text-center font-serif'>{massageShopName}</div>
            {/* {
                onCompare? <Rating id={hospitalName + ' Rating'} name={hospitalName + ' Rating'} data-testid={hospitalName + ' Rating'} className='h-[10%] ml-[70px]' value={value} onChange={(event,   newValue) => {setValue(newValue || 0); event.preventDefault(); event.stopPropagation(); onCompare(hospitalName,newValue)}}/>
                : ''
            } */}
        </InteractiveCard>
    );
}
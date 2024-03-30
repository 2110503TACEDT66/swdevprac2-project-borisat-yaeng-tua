'use client'

import styles from "./Banner.module.css"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

export default function Banner () {

  const banner = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg']
  const [index, setIndex] = useState(0)
  const router = useRouter()

  const changeCover = () => {
    setIndex((index+1)%4)
  }

  const {data: session} = useSession()
  console.log(session)

  return (
    <div className={styles.banner} onClick={changeCover}>
      <Image src={banner[index]}
      alt="Banner Picture"
      fill={true}
      objectFit="cover"
      priority
      />
      {
        session? <div className="z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl">Welcome {session.user?.name}</div>
        : ''
      }
      <div className={styles.bannerText}>
        <h1 className="text-4xl font-medium">AMAN Spa & Wellness center</h1>
        <h3 className="text-xl font-serif">Get the best relaxing exprerience with us!</h3>
      </div>
      <button className='bg-white text-cyan-600 border border-cyan-600 font-semibold p-2 m-2 rounded index z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-none'
        onClick={(e) => {router.push('/massageShop'); e.preventDefault(); e.stopPropagation()}}>
        Select Your package now
      </button>
    </div>
  )
}
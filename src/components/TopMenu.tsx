import styles from "./TopMenu.module.css"
import Image from "next/image"
import TopMenuItem from "./TopMenuItem"
import { getServerSession } from "next-auth"
import { Link } from "@mui/material"
import { authOptions } from "@/libs/authOptions"
import Link1 from "next/link"



export default async function TopMenu () {

  const session = await getServerSession(authOptions)

  return (
    <div className={styles.menucontainer}>
     
      <TopMenuItem title="MyBooking" pageRef="/mybooking"/>
      <Link1 href="/">
      <Image src={"/img/logo.png"}
      alt="logo"
      fill={false}
      className={styles.logoimg}
      width={0}
      height={0}
      sizes="100vh"/>
      </Link1>
      {
        session? <Link href="/api/auth/signout">
          <div className="flex items-center absolute left-0 h-full px-2 text-cyan-600 text-sm">Sign-Out of {session.user?.name}</div>
        </Link>
        : <Link href="/api/auth/signin">
          <div className="flex items-center absolute left-0 h-full px-2 text-cyan-600 text-sm">Sign-In</div>
        </Link>
      }
    </div>
  )
}
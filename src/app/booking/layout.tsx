import BookingMenu from "@/components/BookingMenu"
import styles from './booking.module.css'
import NextAuthProvider from "@/providers/NextAuthProvider"
import { getServerSession } from "next-auth"
import { authOptions } from "@/libs/authOptions"

export default async function BookingLayout ({children}: {children:React.ReactNode}){
    const NextAuthSession = await getServerSession(authOptions);
    return (
        <NextAuthProvider session={NextAuthProvider}>
        <div className={styles.sectionlayout}>
            {/* <BookingMenu/> */}
            {children}
        </div>
        </NextAuthProvider>
    )
}
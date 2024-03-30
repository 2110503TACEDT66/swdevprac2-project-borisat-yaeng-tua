
import BookingList from "@/components/BookingList"
import { getServerSession } from "next-auth"
import { authOptions } from "@/libs/authOptions"

export default async function MyBooking() {
    const session = await getServerSession(authOptions)
  if (!session || !session.user.token) return null

  const token = session.user.token
    return (
        <main>
            <BookingList></BookingList>
        </main>
    )
}
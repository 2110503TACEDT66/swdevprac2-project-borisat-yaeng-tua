import DateReserve from "@/components/DateReserve"

export  default function Bookings(){
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="texl-xl font-medium">Massage Booking</div>

            <div className="w-fit space-y-2">
                <DateReserve></DateReserve>
            </div>

            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" name="Book Vaccine">
                reservation seat
            </button>
        </main>
    )
}
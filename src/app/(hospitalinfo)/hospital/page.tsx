import getHospitals from "@/libs/getHospitals"
import HospitalCatolog from "@/components/HospitalCatalog"
import { Suspense } from "react"
import { LinearProgress } from "@mui/material"


export default function Hospital() {

    const hospitals = getHospitals()

    return (
        <main className="text-center p-5">
            <h1 className="text-xl font-medium">Select Your Hospital</h1>
            <Suspense fallback={ <p>Loading ... <LinearProgress/></p> } >
            <HospitalCatolog hospitalsJson={hospitals} />
            </Suspense>

            {/* <hr className="my-10"/>
            <h1 className="text-xl font-medium">TRY Client-side Car Panel</h1>
            <CardPanel/> */}

        </main>
    )
}
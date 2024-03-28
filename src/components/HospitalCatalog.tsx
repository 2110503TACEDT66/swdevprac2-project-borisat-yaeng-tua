import Card from '@/components/Card'
import Link from 'next/link'

export default async function HospitalCatalog( {hospitalsJson}: {hospitalsJson: Promise<HospitalJson>} ) {
    const hospitalJsonReady = await hospitalsJson
    return (
        <>
        Expore {hospitalJsonReady.count} package in our catalog
        <div style={{margin:"20px" , display:"flex", flexDirection:"row",flexWrap:"wrap",
            justifyContent:"space-around", alignContent:"space-around", padding:"10px"}}>
                {
                    hospitalJsonReady.data.map((HospitalItem:HospitalItem)=>(
                        <Link href={`/hospital/${HospitalItem.id}`} className='w-1/5'>
                        <Card hospitalName={'spa'} imgSrc={'/img/chula.png'} />
                        </Link>
                    ))
                }
            </div>
        </>
    )
}
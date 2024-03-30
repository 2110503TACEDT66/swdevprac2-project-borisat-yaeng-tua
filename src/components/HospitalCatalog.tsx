
import Card from "./Card";

export default async function HospitalCatalog ({hospitalsJson} : {hospitalsJson:Promise<HospitalJson>}) {
  
    const hospitalsJsonReady = await hospitalsJson
    
    return (
        <>
            <div style={{
            margin: "20px", 
            display: "flex", 
            flexDirection: "row", 
            flexWrap: "wrap", 
            justifyContent: "space-around", 
            alignContent: "space-around"}}>
                {
                    hospitalsJsonReady.data.map((h:HospitalItem) => 
                        <a href={`/hospital/${h._id}`} className="w-1/5">
                            <Card hospitalName={h.name} imgSrc={h.picture}/>
                        </a>
                    )
                }

            </div>
        </>
    );
}
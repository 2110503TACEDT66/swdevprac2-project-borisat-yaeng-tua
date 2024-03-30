'use client'
import { useReducer } from "react";
import Card from "./Card";
import Link from "next/link";

export default function CardPanel () {
    const compareReducer = (compareList:Map<string, number>, action:{type:string, hospitalName:string, rating:number}) => {
        switch(action.type) {
            case 'add' : {
                return new Map(compareList.set(action.hospitalName, action.rating || 0))
            }
            case 'remove' : {
                compareList.delete(action.hospitalName)
                return new Map(compareList)
            }
            default: return compareList
        }
    }

    // Mock
    const mockHospitalRepo = [
        {hid: "001", name: "Chulalongkorn Hospital", image: "/img/chula.jpg"},
        {hid: "002", name: "Rajavithi Hospital", image: "/img/rajavithi.jpg"},
        {hid: "003", name: "Thammasat University Hospital", image: "/img/thammasat.jpg"},
    ]

    const [ compareList, dispatchCompare ] = useReducer(compareReducer, new Map(
        mockHospitalRepo.map((h) => [h.name, 5])
        ))
    
    return (
        <div>
            <div style={{
            margin: "20px", 
            display: "flex", 
            flexDirection: "row", 
            flexWrap: "wrap", 
            justifyContent: "space-around", 
            alignContent: "space-around"}}>
                {
                    mockHospitalRepo.map((h) => 
                        <a href={`/hospital/${h.hid}`} className="w-1/5">
                            <Card hospitalName={h.name} imgSrc={h.image}
                                onCompare={(Hospital:string, Rating:number) => dispatchCompare({type:'add', hospitalName:Hospital, rating:Rating})}
                            />
                        </a>
                    )
                }
                
            </div>
            <div className="w-full text-xl font-medium"></div>
            {Array.from(compareList).map(([Hospital, Rating]) => <div data-testid={Hospital} onClick={() => dispatchCompare({type:'remove', hospitalName:Hospital, rating:Rating})}>{Hospital} : {Rating}</div>)}
        </div>
    );
}
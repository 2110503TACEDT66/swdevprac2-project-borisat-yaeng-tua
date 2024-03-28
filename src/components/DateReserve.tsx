'use client'
import { useState } from "react"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { Select, MenuItem } from "@mui/material"
import { TextField } from "@mui/material"

export default function DateReserve() {

    const [reserveDate, setReserveDate] = useState(null)
    const [Location, setLocation] = useState('Chula')

    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center">
            
            <TextField className="h-8 w-[200px] mt-2" name="Name-Lastname" label="Name-Lastname" variant="standard" />
            <TextField className="h-8 w-[200px] mt-2" name="Citizen ID" label="Citizen ID" variant="standard" />
            
            <LocalizationProvider dateAdapter={ AdapterDayjs}>
                <DatePicker className="bg-white" value={reserveDate} 
                onChange={ (value)=>{setReserveDate(value); alert(value)}}></DatePicker>
            </LocalizationProvider>
            

            <Select variant="standard" name="Location" id="id" value={Location}
            onChange={ (e) =>setLocation(e.target.value)}
            className="h-[3em] w-[200px]">
                <MenuItem value="Chula">Specific spa</MenuItem>
                <MenuItem value="Rajavithi">Full body spa</MenuItem>
                <MenuItem value="Thammasat">Spa with world class</MenuItem>
            </Select>
            
        </div>
    )
}
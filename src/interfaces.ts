import { MouseEventHandler } from "react"

export interface MassageShopItem {
  _id: string,
  name: string,
  address: string,
  tel: string,
  open_close_time: string,
  picture: string 
  }
  
 export interface MassageShopJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: MassageShopItem[]
  }

export interface BookingItem {
  name: string,
  surname: string,
  id: string,
  hospital: string,
  bookDate: string
}

export interface Booking {
  _id: string,
  name: string ,
  address: string,
  tel: string,
  open_close_time: string,
  picture: string
}
interface User {
  name: string,
  tel: string,
  email: string,
  role: string,
  password: string,
  createAt: Date
}

export interface CustomButtonProps {
  handleClick?: MouseEventHandler<HTMLButtonElement> | undefined ;
  title: string;
  containerStyles?: string;
  btnType?: "button" | "submit";


}
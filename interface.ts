export interface MassageShopItem {
  _id: string,
  name: string,
  address: string,
  tel: string,
  open_close_time: string,
  picture: string 
  }

  interface MassageShopJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: MassageShopItem[]
  }

interface HospitalItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    picture: string,
    __v: number,
    id: string
  }
  
  interface HospitalJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: HospitalItem[]
  }
  export interface BookingItem{
    name: string;
    surname: string;
    id: string;
    hospital: string;
    bookDate: string;
  
  }
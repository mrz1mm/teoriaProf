import { iGeo } from "./geo"

export interface iUser {
  id: number
  name: string
  username: string
  email: string
  address: iAddress
  phone: string
  website: string
  company: iCompany
}

export interface iAddress {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: iGeo
}



export interface iCompany {
  name: string
  catchPhrase: string
  bs: string
}

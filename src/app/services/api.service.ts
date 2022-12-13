import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // to get all 
  getHouses() {
    return this.http.get('http://localhost:3000/allhouses')
  }
  // get  only user requested house
  viewHouse(houseId: any) {
    return this.http.get('http://localhost:3000/viewHouse/' + houseId)
  }

  // update
  updatehouse(houseBody:any){
    return this.http.put('http://localhost:3000/updateHouse',houseBody)
  }

  // delete requested house
  deleteHouse(houseId: any) {
    return this.http.delete('http://localhost:3000/deleteHouse/' + houseId)
  }

  // add a house
  addHouse(
    id: any,
    image1: any,
    image2: any,
    image3: any,
    image4: any,
    title: any,
    location: any,
    owner: any,
    contact: any,
    cent: any,
    floor: any,
    type: any,
    rooms: any,
    bhk: any,
    year: any,
    price: any,
    other: any
  ) {
    const body = {
      id,
      image1,
      image2,
      image3,
      image4,
      title,
      location,
      owner,
      contact,
      cent,
      floor,
      type,
      rooms,
      bhk,
      year,
      price,
      other
    }

    return this.http.post('http://localhost:3000/addHouse',body)

  }


}

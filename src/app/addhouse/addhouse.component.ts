import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-addhouse',
  templateUrl: './addhouse.component.html',
  styleUrls: ['./addhouse.component.css']
})
export class AddhouseComponent implements OnInit {
  addForm = this.fb.group({
    id: '',
    image1: '',
    image2: '',
    image3: '',
    image4: '',
    title: '',
    location: '',
    owner: '',
    contact: '',
    cent: '',
    floor: '',
    type: '',
    rooms: '',
    bhk: '',
    year: '',
    price: '',
    other: ''
  })
  constructor(private ApiService: ApiService, private fb: FormBuilder,private router:Router) { }

  ngOnInit(): void { }

  addhouse() {
    var id = this.addForm.value.id
    var image1 = this.addForm.value.image1
    var image2 = this.addForm.value.image2
    var image3 = this.addForm.value.image3
    var image4 = this.addForm.value.image4
    var title = this.addForm.value.title
    var location = this.addForm.value.location
    var owner = this.addForm.value.owner
    var contact = this.addForm.value.contact
    var cent = this.addForm.value.cent
    var floor = this.addForm.value.floor
    var type = this.addForm.value.type
    var rooms = this.addForm.value.rooms
    var bhk = this.addForm.value.bhk
    var year = this.addForm.value.year
    var price = this.addForm.value.price
    var other = this.addForm.value.other

    if (this.addForm.valid) {
    this.ApiService.addHouse(
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
    ).subscribe((result:any)=>{
      alert(result.message)
      this.router.navigateByUrl('')
    })
  }
  else{
    alert('invalid form')
  }
  }

}







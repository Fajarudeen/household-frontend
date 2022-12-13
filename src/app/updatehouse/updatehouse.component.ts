import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-updatehouse',
  templateUrl: './updatehouse.component.html',
  styleUrls: ['./updatehouse.component.css']
})
export class UpdatehouseComponent implements OnInit{

  houseId:any
  houseBody:any
  body:any

  constructor(private router:Router,private ApiService:ApiService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.params
    .subscribe((data)=>{      
      this.houseId=data['id']
      this.ApiService.viewHouse(this.houseId)
      .subscribe((result)=>{
        this.body=result
        this.houseBody=this.body.house
        console.log(this.houseBody);
        
      })
    })
  }
  updateHouse(form:any){
    let updatehouse={
      id:form.value.id,
      image1:form.value.image1,
      image2:form.value.image2,
      image3:form.value.image3,
      image4:form.value.image4,
      title:form.value.title,
      location:form.value.location,
      owner:form.value.owner,
      contact:form.value.contact,
      cent:form.value.cent,
      floor:form.value.floor,
      type:form.value.type,
      rooms:form.value.rooms,
      bhk:form.value.bhk,
      year:form.value.year,
      price:form.value.price,
      other:form.value.other
    }
    this.ApiService.updatehouse(updatehouse)
    .subscribe((data)=>{
      alert('restaurant details updated')
      this.router.navigateByUrl('')
    })
    
  }
}

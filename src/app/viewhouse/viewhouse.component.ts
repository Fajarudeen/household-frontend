import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-viewhouse',
  templateUrl: './viewhouse.component.html',
  styleUrls: ['./viewhouse.component.css']
})
export class ViewhouseComponent implements OnInit{
  houseId:any
  houseBody:any
  id:any

  constructor(private activatedRoute:ActivatedRoute,
    private ApiService:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data)=>{
      this.houseId=data['id']
      console.log(this.houseId);
    })
    // api call
    this.ApiService.viewHouse(this.houseId)
    .subscribe((result)=>{
      console.log(result);
      this.houseBody=result
    })

  }

    // delete
    onDelete(){
        this.ApiService.deleteHouse(this.houseId)
        // console.log(this.houseId);
        .subscribe((result:any)=>{
          alert(result.message)
          this.router.navigateByUrl('')
          // console.log(result);
        })
    }

}

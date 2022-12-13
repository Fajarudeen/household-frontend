import { Component,OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-houselist',
  templateUrl: './houselist.component.html',
  styleUrls: ['./houselist.component.css']
})
export class HouselistComponent {
  houseLists:any
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getHouses()
    .subscribe((result:any)=>{
    this.houseLists=result.house
    console.log( this.houseLists);
    // this.houseLists.forEach((item:any) => {
    //   Object.assign(item,{quantity:1,total:item.price})
    // });
    }
    )
  }

}

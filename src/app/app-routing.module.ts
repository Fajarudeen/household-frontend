import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddhouseComponent } from './addhouse/addhouse.component';
import { DeletehouseComponent } from './deletehouse/deletehouse.component';
import { HouselistComponent } from './houselist/houselist.component';
import { UpdatehouseComponent } from './updatehouse/updatehouse.component';
import { ViewhouseComponent } from './viewhouse/viewhouse.component';

const routes: Routes = [
  {
    path:'',component:HouselistComponent
  },
  {
    path:'viewhouse/:id',component:ViewhouseComponent
  },
  {
    path:'addhouse',component:AddhouseComponent
  },
   // path for UpdateRestaurantComponent
   {
   path:'updatehouse/:id', component:UpdatehouseComponent
  },
   {
   path:'deletehouse/:id', component:DeletehouseComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

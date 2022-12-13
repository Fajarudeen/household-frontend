import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HouselistComponent } from './houselist/houselist.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewhouseComponent } from './viewhouse/viewhouse.component';
import { AddhouseComponent } from './addhouse/addhouse.component';
import { UpdatehouseComponent } from './updatehouse/updatehouse.component';
import { DeletehouseComponent } from './deletehouse/deletehouse.component';
import { SlideshowComponent } from './slideshow/slideshow.component';

@NgModule({
  declarations: [
    AppComponent,
    HouselistComponent,
    HeaderComponent,
    FooterComponent,
    ViewhouseComponent,
    AddhouseComponent,
    UpdatehouseComponent,
    DeletehouseComponent,
    SlideshowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Flight } from '../Model/flight';
import { FlightService } from '../service/flight.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

 origin !: String  ;
 destination ! : String ;
 departuredate! : String;
flight ! :Flight[];




  constructor(private flihgtService: FlightService) { }

  ngOnInit(): void {
  }

getplaces( ){
   this.flihgtService.getplaces(this.origin , this.destination , this.departuredate).subscribe(data => {
    this.flight=data;  })


}
switchorigin(origin : String){
  this.origin = origin ;
}
switchdestination( destination : String){
  this. destination = destination ;
}
switchdate( date : String ) {
  this.departuredate = date ;
}



}

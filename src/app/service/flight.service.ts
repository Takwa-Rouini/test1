import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../Model/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {





  constructor(private httpClient: HttpClient ) { }

  //get table of places



    getplaces(origin :String , destination : String, departureDate:String ) :Observable<Flight[]>{


   return this.httpClient.get<Flight[]>(`https://devoxx2021-redhat-amadeus-contest-api.comwork.io/v1/amadeus?origin=${origin}&destination=${destination}&departure_date=${departureDate}`);

    }

  }

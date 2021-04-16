import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SessionService } from '../services/session.service';
import { Wrapping } from '../models/wrapping'; 

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable({
  providedIn: 'root'
})
export class WrappingService {

  baseUrl: string = "/api/Wrapping";



    constructor(private httpClient: HttpClient,
                private sessionService: SessionService)
    {

    }

    getWrappings(): Observable<Wrapping[]>
    {		
      return this.httpClient.get<Wrapping[]>(this.baseUrl + "/retrieveAllWrappings").pipe
      (
        catchError(this.handleError)
      );
    }



    private handleError(error: HttpErrorResponse)
    {
      let errorMessage: string = "";
      
      if (error.error instanceof ErrorEvent) 
      {		
        errorMessage = "An unknown error has occurred: " + error.error;
      } 
      else 
      {		
        errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error}`;
      }
      
      console.error(errorMessage);
      
      return throwError(errorMessage);		
    }
}


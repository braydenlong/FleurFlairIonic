import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SessionService } from '../services/session.service';
import { Bouquet } from '../models/bouquet';
import { CreateBouquetReq } from '../models/create-bouquet-req';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BouquetService {

  baseUrl: string = "/api/Bouquet";

  constructor(private httpClient: HttpClient,
    private sessionService: SessionService)
{

}

createNewBouquet(newBouquet: Bouquet): Observable<number>
{		
  let createBouquetReq: CreateBouquetReq = new CreateBouquetReq(this.sessionService.getUsername(), this.sessionService.getPassword(), 
  newBouquet);
  
  return this.httpClient.put<number>(this.baseUrl, createBouquetReq, httpOptions).pipe
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

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SessionService } from '../services/session.service';
import { Order } from '../models/order';
import { CreateOrderReq } from '../models/create-order-req';
import { UpdateOrderReq } from '../models/update-order-req';
import { OrderStatusEnum } from '../models/order-status-enum.enum';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
}) 

export class OrderService {

  baseUrl: string = "/api/Order";

    constructor(private httpClient: HttpClient,
                private sessionService: SessionService)
    {

    } 



    getOrders(): Observable<Order[]>
    {				
      return this.httpClient.get<Order[]>(this.baseUrl + "/retrieveAllOrders?username=" + this.sessionService.getUsername() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
    }
	
	
	
    getOrderByOrderId(orderId: number): Observable<Order>
    {
      return this.httpClient.get<Order>(this.baseUrl + "/retrieveOrder/" + orderId + "?username=" + this.sessionService.getUsername() + "&password=" + this.sessionService.getPassword()).pipe
      (
        catchError(this.handleError)
      );
    }
	
	
	
    createNewOrder(orderStatus?: OrderStatusEnum, orderDateTime?: Date, userId?: number, transactionId?: number, deliveryId?: number,
      bouquetId?: number): Observable<number>
    {		
      let createOrderReq: CreateOrderReq = new CreateOrderReq(this.sessionService.getUsername(), this.sessionService.getPassword(), 
      orderStatus, orderDateTime, userId, transactionId, deliveryId, bouquetId );
      
      return this.httpClient.put<number>(this.baseUrl, createOrderReq, httpOptions).pipe
      (
        catchError(this.handleError)
      );
    }
	
	
	
    updateOrder(orderToUpdate: Order): Observable<any>
    {
      let updateOrderReq: UpdateOrderReq = new UpdateOrderReq(this.sessionService.getUsername(), this.sessionService.getPassword(), orderToUpdate);
      
      return this.httpClient.post<any>(this.baseUrl, updateOrderReq, httpOptions).pipe
      (
        catchError(this.handleError)
      );
    }
	
  
  
    deleteOrder(orderId: number): Observable<any>
    {
      return this.httpClient.delete<any>(this.baseUrl + "/" + orderId + "?username=" + this.sessionService.getUsername() + "&password=" + this.sessionService.getPassword()).pipe
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

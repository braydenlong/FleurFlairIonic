import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { OrderService } from '../../services/order.service';
import { FlowerService } from '../../services/flower.service';
import { WrappingService } from '../../services/wrapping.service';
import { SessionService } from '../../services/session.service';
import {BouquetService} from '../../services/bouquet.service';
import { Order } from '../../models/order';
import {Bouquet} from '../../models/bouquet'
import { Flower } from '../../models/flower';
import { Wrapping } from '../../models/wrapping';
import { OrderStatusEnum } from 'src/app/models/order-status-enum.enum';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.page.html',
  styleUrls: ['./create-order.page.scss'],
})
export class CreateOrderPage implements OnInit {

  submitted: boolean;
  newOrder: Order;
  newBouquet: Bouquet;
  orderDateTime: Date;

  mainFlowersId: string[];
  fillerFlowersId: string[];
  wrappingId: string;

  mainFlowers: Flower[];
  fillerFlowers: Flower[];
  wrappings: Wrapping[];

  resultSuccess: boolean;
  resultError: boolean;
  message: string;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private sessionService: SessionService,
    private orderService: OrderService,
    private flowerService: FlowerService,
    private bouquetService: BouquetService,
    private wrappingService: WrappingService) {
    this.submitted = false;

    this.newOrder = new Order();
    this.newBouquet = new Bouquet();
    

    this.resultSuccess = false;
    this.resultError = false;
  }

  ngOnInit() {
    this.flowerService.getMainFlowers().subscribe(
      response => {
        this.mainFlowers = response;
      },
      error => {
        console.log("Cannot retrieve main flowers");
      }
    );

    this.flowerService.getFillerFlowers().subscribe(
      response => {
        this.fillerFlowers = response;
      },
      error => {
        console.log("Cannot retrieve filler flowers");
      }
    );

    this.wrappingService.getWrappings().subscribe(
      response => {
        this.wrappings = JSON.parse(JSON.stringify(response));
        console.log(this.wrappings[0].name);
      },
      error => {
        console.log("Cannot retrieve wrappings");
      }
    );
  }



  clear() {
    this.submitted = false;
    this.newOrder = new Order();
  }

  create(createOrderForm: NgForm) {
    
    let longMainFlowersIds: number[] = new Array();
    let longFillerFlowersIds: number[] = new Array();

    if (this.mainFlowersId != null && this.fillerFlowersId != null) {
      for (var i = 0; i < this.mainFlowersId.length; i++) {
        longMainFlowersIds.push(parseInt(this.mainFlowersId[i]));
      }
      for (var j = 0; i < this.fillerFlowersId.length; j++){
        longFillerFlowersIds.push(parseInt(this.fillerFlowersId[j]));
      }
    }

    this.submitted = true;
    let userId = this.sessionService.getCurrentCustomer().userId;
    let transactionId = this.sessionService.getCurrentCustomer().transactions.length;
    let newBouquetId = 1;
    

    if (createOrderForm.valid) {

      this.bouquetService.createNewBouquet(this.newBouquet).subscribe(
        response => {
          newBouquetId = response;
        },
        error => {
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while creating the new bouquet: " + error;
        }
      )

      
      this.orderService.createNewOrder(OrderStatusEnum.INTRANSIT, new Date(), userId, transactionId, transactionId, newBouquetId).subscribe(
        response => {
          let newOrderId: number = response;
          this.resultSuccess = true;
          this.resultError = false;
          this.message = "New order " + newOrderId + " created successfully";

          this.newOrder = new Order();
          this.mainFlowersId = new Array();
          this.fillerFlowersId = new Array();
          this.wrappingId = "";
          
          this.submitted = false;
          createOrderForm.reset();
        },
        error => {
          this.resultError = true;
          this.resultSuccess = false;
          this.message = "An error has occurred while creating the new order: " + error;
        }
      );
    }
  }

}

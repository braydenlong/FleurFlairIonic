import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { OrderService } from '../../services/order.service';
import { FlowerService } from '../../services/flower.service';
import { WrappingService } from '../../services/wrapping.service';
import { Order } from '../../models/order';
import {Bouquet} from '../../models/bouquet'
import { Flower } from '../../models/flower';
import { Wrapping } from '../../models/wrapping';

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
    private orderService: OrderService,
    private flowerService: FlowerService,
    private wrappingService: WrappingService) {
    this.submitted = false;
    this.newOrder = new Order();
    

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

}

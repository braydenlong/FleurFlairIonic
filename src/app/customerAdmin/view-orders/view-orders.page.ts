import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OrderService } from '../../services/order.service';
import { Order } from '../../models/order';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.page.html',
  styleUrls: ['./view-orders.page.scss'],
})
export class ViewOrdersPage implements OnInit {

  orders: Order[];



  constructor(private router: Router,
    private orderService: OrderService) {
  }



  ngOnInit() {
    this.refreshOrders();
  }



  ionViewWillEnter() {
    this.refreshOrders();
  }



  viewOrderDetails(event, order) {
    this.router.navigate(["/customerAdmin/viewOrderDetails/" + order.orderId]);
  }



  refreshOrders() {
    this.orderService.getOrders().subscribe(
      response => {
        this.orders = response;
      },
      error => {
        console.log('********** ViewMyOrdersPage.ts: ' + error);
      }
    );
  }

}

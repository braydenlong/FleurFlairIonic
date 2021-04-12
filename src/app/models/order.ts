import { Transaction } from "ethereumjs-tx";
import { Bouquet } from "./bouquet";
import { Customer } from "./customer";
import { Delivery } from "./delivery";
import { Florist } from "./florist";
import { OrderStatusEnum } from "./order-status-enum.enum";
import { Review } from "./review";

export class Order {

    orderId: number | undefined;
    orderDateTime: Date | undefined;
    archived: boolean | undefined;
    orderStatus: OrderStatusEnum | undefined;
    delivery: Delivery | undefined;
    review: Review | undefined;
    customer: Customer | undefined;
    transaction: Transaction | undefined;
    florist: Florist | undefined;
    bouquet: Bouquet | undefined;

    constructor(orderId?: number, orderDateTime?: Date, orderStatus?: OrderStatusEnum, delivery?: Delivery,
        review?: Review, customer?: Customer, transaction?: Transaction, florist?: Florist,bouquet?: Bouquet){
            this.orderId = orderId;
            this.orderDateTime = orderDateTime;
            this.archived = false;
            this.orderStatus = orderStatus;
            this.delivery = delivery;
            this.review = review;
            this.customer = customer;
            this.transaction =transaction;
            this.florist = florist;
            this.bouquet =bouquet;

    }
}

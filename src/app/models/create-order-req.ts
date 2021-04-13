import { Order } from '../models/order';
import { OrderStatusEnum } from './order-status-enum.enum';

export class CreateOrderReq {

    username: string | undefined;
    password: string | undefined;
    orderStatus: OrderStatusEnum | undefined;
    orderDateTime: Date | undefined;
    userId: number | undefined;
    transactionId: number | undefined;
    deliveryId: number | undefined;
    bouquetId: number | undefined;

    constructor(username?: string, password?: string, orderStatus?: OrderStatusEnum, orderDateTime?: Date, userId?: number, transactionId?: number, deliveryId?: number,
        bouquetId?: number)
	{	
        this.username = username;
        this.password = password;	
		this.orderStatus = orderStatus;
        this.orderDateTime = orderDateTime;
        this.userId = userId;
        this.transactionId = transactionId;
        this. deliveryId = deliveryId;
        this.bouquetId = bouquetId;
        
        
	}
}

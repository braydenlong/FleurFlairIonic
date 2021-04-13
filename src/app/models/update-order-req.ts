import { Order } from '../models/order';
import { OrderStatusEnum } from './order-status-enum.enum';

export class UpdateOrderReq {

    username: string | undefined;
    password: string | undefined;
    orderToUpdate: Order | undefined;

    constructor(username?: string, password?: string, orderToUpdate?: Order)
	{	
        this.username = username;
        this.password = password;	
		this.orderToUpdate = orderToUpdate;
        
        
	}
}

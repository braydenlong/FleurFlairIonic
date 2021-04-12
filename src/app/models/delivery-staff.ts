import { Delivery } from "./delivery";
import { User } from "./user";

export class DeliveryStaff extends User{

    deliveries: Delivery[] | undefined;

    constructor(userId?: number, name?: string, username?: string, password?: string, email?: string, phoneNum?: string, dob?: string
        , deliveries?: Delivery[]){
        super();
        this.deliveries = deliveries;
    }

}

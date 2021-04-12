import { Order } from "./order";
import { User } from "./user";

export class Florist extends User {

    orders: Order[] | undefined;

    constructor(userId?: number, name?: string, username?: string, password?: string, email?: string, phoneNum?: string, dob?: string
        , orders?: Order[]){
        super();
        this.orders = orders;
    }
}

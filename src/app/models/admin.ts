import { Promotion } from "./promotion";
import { User } from "./user";

export class Admin extends User{

    promotions: Promotion[] | undefined;

    constructor(userId?: number, name?: string, username?: string, password?: string, email?: string, phoneNum?: string, dob?: string
        , promotions?: Promotion[]){
            super();
            this.promotions = promotions;

    }
}

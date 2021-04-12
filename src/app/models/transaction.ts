import { CreditCard } from "./credit-card";
import { Customer } from "./customer";
import { Order } from "./order";

export class Transaction {
    transactionId: number | undefined;
    transactionDate: Date | undefined;
    transactionAmount: number | undefined;
    isAvailable: boolean | undefined;
    creditCard: CreditCard | undefined;
    customer: Customer | undefined;
    order: Order | undefined;

    constructor(transactionId?: number, transactionDate?: Date, transactionAmount?: number, creditCard?: CreditCard,
        customer?: Customer, order?: Order){
            this.transactionId = transactionId;
            this.transactionDate = transactionDate;
            this.transactionAmount = transactionAmount;
            this.isAvailable = true;
            this.creditCard = creditCard;
            this.customer = customer;
            this.order = order;
    }

}

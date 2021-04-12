
import { Customer } from "./customer";
import { Transaction } from "./transaction";

export class CreditCard {

    creditCardId: number | undefined;
    cardNumber: string | undefined;
    nameOnCard: string | undefined;
    password: string | undefined;
    email: string | undefined;
    isArchived: boolean | undefined;
    transactions: Transaction[] | undefined;
    customer: Customer | undefined;

    constructor(creditCardId?: number, cardNumber?: string, nameOnCard?: string, password?: string, email?: string,
        transactions?: Transaction[], customer?: Customer){
            this.creditCardId = creditCardId;
            this.cardNumber = cardNumber;
            this.nameOnCard = nameOnCard;
            this.password = password;
            this.email = email;
            this.isArchived = false;
            this.transactions = transactions;
            this.customer = customer;

    }
}

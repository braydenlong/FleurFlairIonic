import { CreditCard } from "./credit-card";
import { Review } from "./review";
import { Transaction } from "./transaction";
import { User } from "./user";

export class Customer extends User {

    transactions: Transaction[] | undefined;
    creditCard: CreditCard | undefined;
    reviews: Review[] | undefined;
	
	
	
	constructor(userId?: number, name?: string, username?: string, password?: string, email?: string, phoneNum?: string, dob?: string,
        transactions?: Transaction[], creditCard?: CreditCard, reviews?: Review[])
	{
        super();
		this.transactions = transactions;
        this.creditCard = creditCard;
        this.reviews = reviews;
	}
}

import { Customer } from "./customer";
import { Order } from "./order";

export class Review {

    reviewId: number | undefined;
    name: string | undefined;
    archived: boolean | undefined;
    score: string | undefined;
    order: Order | undefined;
    customer: Customer | undefined;

    constructor(reviewId?: number, name?: string, score?: string, order?: Order, customer?: Customer){
        this.reviewId = reviewId;
        this.name = name;
        this.archived = false;
        this.score = score;
        this.order = order;
        this.customer = customer;


    }
}

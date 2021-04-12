import { DeliveryStaff } from "./delivery-staff";
import { Order } from "./order";
import { Staff } from "./staff";

export class Delivery {

    deliveryId: number | undefined;
    deliveryDateTime: Date | undefined;
    isArchived: boolean | undefined;
    staff: Staff | undefined;
    deliveryStaff : DeliveryStaff | undefined;
    order: Order | undefined;

    constructor(deliveryId?: number, deliveryDateTime?: Date, staff?: Staff, deliveryStaff?: DeliveryStaff, order?: Order){
        this.deliveryId = deliveryId;
        this.deliveryDateTime = deliveryDateTime;
        this.isArchived = false;
        this.staff = staff;
        this.deliveryStaff = deliveryStaff;
        this.order = order;

    }

}

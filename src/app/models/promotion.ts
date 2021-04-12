import { Admin } from "./admin";
import { PromotionEnum } from "./promotion-enum.enum";

export class Promotion {

    promoId: number | undefined;
    promoName: string | undefined;
    promoCode: string | undefined;
    startDate: Date | undefined;
    endDate: Date | undefined;
    isAvailable: boolean | undefined;
    promoType: PromotionEnum | undefined;
    discountAmount: number | undefined;
    admin: Admin | undefined;

    constructor(promoId?: number, promoName?: string, promoCode?: string, startDate?: Date, endDate?: Date,
        promoType?: PromotionEnum, discountAmount?: number, admin?: Admin){
            this.promoId = promoId;
            this.promoName = promoName;
            this.promoCode = promoCode;
            this.startDate = startDate;
            this.endDate = endDate;
            this.promoType = promoType;
            this.discountAmount = discountAmount;
            this.admin = admin;
            this.isAvailable = true;


    }
}


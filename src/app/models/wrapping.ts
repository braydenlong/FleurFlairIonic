import { Bouquet } from "./bouquet";

export class Wrapping {
    wrappingId: number | undefined;
    name: string | undefined;
    price : number | undefined;
    description: string | undefined;
    design: string | undefined;
    image: string | undefined;
    isAvailable : boolean | undefined;
    isArchived: boolean | undefined;
    bouquets: Bouquet[] | undefined;
    
    constructor(wrappingId?: number, name?: string, price?: number, description?: string, design?: string, image?: string, 
        bouquets?: Bouquet[]){
        this.wrappingId = wrappingId;
        this.name = name;
        this.price = price;
        this.description = description;
        this.design = design;
        this.image = image;
        this.isAvailable = true;
        this.isArchived = false;
    }

}

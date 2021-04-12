import { Bouquet } from "./bouquet";
import { FlowerEnum } from "./flower-enum.enum";
import { Tag } from "./tag";

export class Flower {

    flowerId: number | undefined;
    name: string | undefined;
    price: number | undefined;
    type: FlowerEnum | undefined;
    description: string | undefined;
    tags: Tag[] | undefined;
    bouquets: Bouquet[] | undefined;
    isAvailable: boolean | undefined;
    isArchived: boolean | undefined;

    constructor(flowerId?: number, name?: string, price?: number, type?: FlowerEnum, description?: string, tags?: Tag[]
        , bouquets?: Bouquet[]){
            this.flowerId = flowerId;
            this.name = name;
            this.price = price;
            this.type = type;
            this.description = description;
            this.tags = tags;
            this.bouquets = bouquets;
            this.isAvailable = true;
            this.isArchived = false;

    }
}

import { BouquetTypeEnum } from "./bouquet-type-enum.enum";
import { Flower } from "./flower";
import { SizeEnum } from "./size-enum.enum";
import { Wrapping } from "./wrapping";

export class Bouquet {
    bouquetId: number | undefined;
    name: string | undefined;
	totalPrice: number | undefined;
	size: SizeEnum | undefined;
    image: string | undefined;
    type: BouquetTypeEnum | undefined;
    flowers: Flower[] | undefined;
    wrapping: Wrapping | undefined;
    isAvailable: boolean | undefined;
    isArchived: boolean | undefined;
    
	
	
	
	constructor(bouquetId?: number, name?: string, totalPrice?: number, size?: SizeEnum, image?: string, type?:BouquetTypeEnum, flowers?: Flower[],
         wrapping?: Wrapping)
	{
		this.bouquetId = bouquetId;
        this.name = name;
        this.totalPrice = totalPrice;
        this.size = size;
        this.image = image;
        this.type = type;
        this.flowers = flowers;
        this.wrapping = wrapping;
        this.isAvailable = true;
        this.isArchived = false;
	}
}

import { Flower } from "./flower";

export class Tag {
    tagId: number | undefined;
    name: string | undefined;
    isArchived: boolean | undefined;
    taggedFlowers: Flower[] | undefined;

    constructor(tagId?: number, name?: string, taggedFlowers?: Flower[]){
        this.tagId = tagId;
        this.name = name;
        this.isArchived = false;
        this.taggedFlowers = taggedFlowers;
    }
}

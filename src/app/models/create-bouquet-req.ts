import { Bouquet } from '../models/bouquet';

export class CreateBouquetReq {

    username: string | undefined;
    password: string | undefined;
    bouquetEntity: Bouquet | undefined;

    constructor(username?: string, password?: string, bouquetEntity?: Bouquet)
	{		
		this.username = username;
        this.password = password;
        this.bouquetEntity = bouquetEntity;
	}


}

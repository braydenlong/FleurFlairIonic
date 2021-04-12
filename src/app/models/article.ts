export class Article {

    articleId: number | undefined;
    title: string | undefined;
	description: string | undefined;
	image: string | undefined;
    isArchived: boolean | undefined;
    
	
	
	
	constructor(articleId?: number, title?: string, description?: string, image?: string)
	{
		this.articleId = articleId;
		this.title = title;
		this.description = description;
        this.image = image;
        this.isArchived = false;
	}
}

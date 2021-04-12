export class User { 
    userId: number | undefined;
    name: string | undefined;
	username: string | undefined;
	password: string | undefined;
    email: string | undefined;
    phoneNum: string | undefined;
    dob: string | undefined;
    archived: boolean | undefined;

    constructor(userId?: number, name?: string, username?: string, password?: string, email?: string, phoneNum?: string, dob?: string)
	{
		this.userId = userId;		
		this.name = name;
		this.username = username;
		this.password = password;
        this.email = email;
        this.phoneNum = phoneNum;
        this.dob = dob;
        this.archived = false;
	}
}

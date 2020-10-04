export interface IServer{
    ID:number;
    Name:String;
    
    Ram:number;
    IsOnline : boolean;

}

export interface IUser{
    name:string;
    email:string;
    mobile:number;
    id?:number;

}
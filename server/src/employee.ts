import * as mongodb from "mongodb";

export interface Employee {
    name: string;
    status:string;
    _id?: mongodb.ObjectId;
}

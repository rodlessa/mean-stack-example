import * as mongodb from "mongodb";

export interface Employee {
    name: string;
    _id?: mongodb.ObjectId;
}

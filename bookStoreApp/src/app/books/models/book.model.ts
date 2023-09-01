import { PriceModel } from "./price.model";

export interface BookModel{
    id: number,
    title: string,
    totalPages: string,
    author: string,
    price: PriceModel
}
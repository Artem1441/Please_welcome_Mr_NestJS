import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ProductDocument = Product & Document

@Schema()
export class Product {
    @Prop()
    title: String

    @Prop()
    price: Number
}

export const ProductSchema = SchemaFactory.createForClass(Product)
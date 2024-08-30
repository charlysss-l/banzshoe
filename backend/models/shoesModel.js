import mongoose from "mongoose";

const shoesSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        brand:{
            type:String,
            required:true,
        },
        color:{
            type:String,
            required:true,
        },
        quantity:{
            type:Number,
            required:true,
        },
        price:{
            type:Number,
            required:true,
        }
    },
    {
        timestamps:true
    }
);
export const Shoes = mongoose.model('Shoes', shoesSchema);
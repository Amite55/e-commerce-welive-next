import { connectDB } from "@/lip/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const db = await connectDB();
    const productsCollection = await db.collection('product-all');
    try {
        
        if (!params.id) {
            return new NextResponse(JSON.stringify({ error: "ID parameter is missing" }), { status: 400 });
        }

        const product = await productsCollection.findOne({ _id: new ObjectId(params.id) });
        
        
        if (!product) {
            return new NextResponse(JSON.stringify({ error: "product not found" }), { status: 404 });
        }

        return new NextResponse(JSON.stringify({ product }), { status: 200 });
    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify({ error: "An error occurred while fetching the product." }), { status: 500 });
    }
};
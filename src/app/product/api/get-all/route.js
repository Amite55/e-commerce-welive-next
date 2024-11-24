import { connectDB } from "@/lip/connectDB"
import { NextResponse } from "next/server";

export const GET = async () => {
    const db = await connectDB();
    const productsCollection = await db.collection('product-all');
    try{
        const product = await productsCollection.find().toArray();
        return NextResponse.json({ product });
    } catch(error){
        console.error("Error fetching products:", error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}


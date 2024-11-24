import { connectDB } from "@/lip/connectDB"
import { NextResponse } from "next/server";

export const GET = async () => {
    const db = await connectDB();
    const newArrivalsCollection = await db.collection('new-arrivals');
    try {
        const product = await newArrivalsCollection.find().toArray();
        return NextResponse.json({ product });
    } catch (error) {
        console.error("Error fetching products:", error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}
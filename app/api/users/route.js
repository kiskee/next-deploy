import { NextResponse} from "next/server"
import connectMongoDB from "@/libs/mongodb"


export async function GET(req){
    
    try {
        await connectMongoDB()
        return NextResponse.json({message: "todo r"})
    } catch (error) {
        return error 
    }
    
}
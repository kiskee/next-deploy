import { NextResponse} from "next/server"


export async function POST(req){
    const{username} = await req.json()
    
    return NextResponse.json({message: "todo r"},{status: 200},{user: username})
}
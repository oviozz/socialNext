
import {NextResponse} from "next/server";
import User from "@/models/User";
import connectDB from "@/lib/dbConnect";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {revalidateTag} from "next/cache";


export const GET = async (req, {params}) => {

    await connectDB();

    const userID = params.profileID;

    if (!userID){
        return NextResponse.json({error: "Invalid Auth", status: 500})
    }

    try {
        const dbUser = await User.findById(userID);

        return NextResponse.json({ dbUser ,  status: 200 });
    } catch (error) {
        console.error("Error fetching user data:", error);
        return NextResponse.json({ error: "Internal Server Error" , status: 500 });
    }
}



export const POST = async (req, {params}) => {

    await connectDB();

    const userID = params.profileID;
    const {formData: updatedData} = await req.json();

    try {
        const updatedUser = await User.findByIdAndUpdate(userID, {
            ...updatedData,
            updatedAt: Date.now(),
        }, )//{new: true}

        if (!updatedUser) {
            return NextResponse.json({error: "Data not updated properly", status: 500})
        }

        return NextResponse.json({message: "Data updated successfully", status: 200})

    }catch (error){
        return NextResponse.json({error: "Data not updated properly", status: 500});
    }


}
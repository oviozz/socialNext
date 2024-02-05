import {NextResponse} from "next/server";
import connectDB from "@/lib/dbConnect";
import Post from "@/models/Post";


export const DELETE = async (_, {params}) => {

    const postID = params.id;

    if (!postID) {
        return NextResponse.json({ error: "Invalid Post ID", status: 500 });
    }

    try {

        await connectDB();

        const deletePost = await Post.findByIdAndDelete(postID)

        if (!deletePost) {
            return NextResponse.json({ error: "Post not found", status: 500 });
        }

        return NextResponse.json({ message: 'Post deleted successfully', status: 200 });

    } catch (error) {
        return NextResponse.error({ status: 500, message: 'Internal Server Error' });
    }

}
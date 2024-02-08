
import {NextResponse} from "next/server";
import connectDB from "@/lib/dbConnect";
import Post from "@/models/Post";
import {revalidatePath, revalidateTag} from "next/cache";
import User from "@/models/User";


export const DELETE = async (_, {params}) => { // delete post

    const postID = params.id;
    const userID = params.userid;

    if (!postID) {
        return NextResponse.json({ error: "Invalid Post ID", status: 500 });
    }

    try {
        await connectDB();

        const deletePost = await Post.findByIdAndDelete(postID)

        await User.updateOne(
            {_id: userID},
            { $inc: { "postCount": -1 } }
        )

        if (!deletePost) {
            return NextResponse.json({ error: "Post not found", status: 500 });
        }

        revalidatePath("/")
        revalidateTag(`user-post-${userID}`)

        return NextResponse.json({ message: 'Post deleted successfully', status: 200 });

    } catch (error) {
        return NextResponse.error({ status: 500, message: 'Internal Server Error' });

    }

}
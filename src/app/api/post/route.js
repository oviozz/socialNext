
import connectDB from "@/lib/dbConnect";
import Post from "@/models/Post";
import {NextResponse} from "next/server";


export const GET = async () => {

    try {

        await connectDB();

        const allPosts = await Post.find().populate('user').sort({createdAt: -1})

        return NextResponse.json({ posts: allPosts, status: 200 });

    } catch (error) {
        console.error('Error fetching posts:', error.message);

        return NextResponse.error({ status: 500, message: 'Internal Server Error' });
    }

}



export const POST = async (req) => {

    await connectDB();

    const postData = await req.json();

    try {

        const newPost = new Post({
            ...postData
        });

        await newPost.save();

        return NextResponse.json({message: "Post Created Successfully" ,  status: 200 });

    } catch (error) {

        console.error(error);
        return NextResponse.json({message: "Couldn't Create Post" ,  status: 500 });
    }

}
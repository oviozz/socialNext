
"use server"

import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import connectDB from "@/lib/dbConnect";
import {revalidatePath, revalidateTag} from "next/cache";

export const createPostData = async (postData) => {

    const {user} = await getServerSession(authOptions);

    try{

        const res = await fetch(`http://localhost:3000/api/post`, {
            method: 'POST',
            body: JSON.stringify({
                ...postData,
                user: user.id,
            })
        });

        revalidateTag('homePost')
        return await res.json()
    } catch (error){
        console.error('Error creating post:', error.message);
    }

}


export const likePostHandler = async (postCardID) => {

    const {user} = await getServerSession(authOptions);

    try {

        const res = await fetch(`http://localhost:3000/api/post/${postCardID}/like`, {
            method: 'POST',
            body: JSON.stringify({
                userId: user.id
            })
        });

        revalidateTag(`post-${postCardID}`)
        return await res.json()

    } catch (error) {
        console.log(error)
    }
}

"use server"

import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {revalidatePath, revalidateTag} from "next/cache";


export const getAccountProfile = async (userID) => {

    const {user} = await getServerSession(authOptions);
    const targetUserID = userID ? userID : user.id;

    try {
        const res = await fetch(`http://localhost:3000/api/profile/${targetUserID}`, {
            //cache: 'force-cache',
            next: {
                tags: [`profileData`, `other-profile-${targetUserID}`]
            }
        });

        return await res.json();
    } catch (error) {
        console.log('error', error);
    }
}

export const updateProfile = async (formData) => {

    const {user} = await getServerSession(authOptions);

    try {
        const res = await fetch(`http://localhost:3000/api/profile/${user.id}`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({formData}),

        });

        revalidateTag('profileData');
        revalidateTag('homePost');

        return await res.json();
    } catch (error) {
        console.log('error', error);
    }
}



export const getUserPosts = async (userID) => {

    const {user} = await getServerSession(authOptions);
    const targetUserID = userID ? userID : user.id;

    try {
        const res = await fetch(`http://localhost:3000/api/profile/${targetUserID}/getposts`, {
            cache: 'no-cache',
            next: {
                tags: [`user-post-${targetUserID}`]
            },
            method: 'GET'
        })

        return await res.json();
    } catch (error) {
        console.log('error', error)
    }
}
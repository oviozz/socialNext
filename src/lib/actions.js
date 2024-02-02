
"use server"

import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {revalidatePath, revalidateTag} from "next/cache";
import {firebaseUploadImage} from "@/firebase/actions";


export const getProfile = async () => {

    const {user} = await getServerSession(authOptions);
    try {
        const res = await fetch(`http://localhost:3000/api/profile/${user.id}`, {
            cache: 'force-cache',
            next: {
                tags: [`profileData`]
            }
        });
        return await res.json();
    } catch (error) {
        console.log('error', error);
    }
}

export const updateProfile = async (formData) => {

    console.log(formData)
    const {user} = await getServerSession(authOptions);

    try {
        const res = await fetch(`http://localhost:3000/api/profile/${user.id}`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({formData}),

        });

        revalidateTag(`profileData`)

        return await res.json();
    } catch (error) {
        console.log('error', error);
    }
}



// export const profileUpload  = async (imageBlob) => {
//     const fileUpload = imageBlob.get("fileUpload");
//     const fileValue = fileUpload instanceof File ? fileUpload : null;
//
//     const {user} = await getServerSession(authOptions);
//     const response = await firebaseUploadImage(user.id, fileValue, '');
//
//     console.log(response)
// }
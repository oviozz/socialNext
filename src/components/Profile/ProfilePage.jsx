
import {getAccountProfile} from "@/lib/profileFunctions/actions";
import ProfileSection from "@/components/Profile/ProfileSection";
import NotFound from "@/components/NotFound";
import ProfilePosts from "@/components/Profile/ProfilePosts";
import {Suspense} from "react";
import PostSkeleton from "@/components/Skeleton/PostSkeleton";

export default async function ProfilePage({params}){

    const {userid} = params;
    const {dbUser, status} = await getAccountProfile(userid);

    return (
        !dbUser || status !== 200 && (
            <ProfileSection userprofile={dbUser} otherUserID={userid}/>
        )
    )
}
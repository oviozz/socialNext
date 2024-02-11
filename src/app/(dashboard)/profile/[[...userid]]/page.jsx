


import {getAccountProfile} from "@/lib/profileFunctions/actions";
import ProfileSection from "@/components/Profile/ProfileSection";
import NotFound from "@/components/NotFound";
import ProfilePosts from "@/components/Profile/ProfilePosts";
import {Suspense} from "react";
import PostSkeleton from "@/components/Skeleton/PostSkeleton";
import ProfilePage from "@/components/Profile/ProfilePage";
import ProfileSectionSkeleton from "@/components/Skeleton/ProfileSectionSkeleton";

export default async function Page({params}){

    const {userid} = params;

    return (
        <main className="flex flex-1 flex-col gap-4 md:gap-5 md:p-6">

            <Suspense fallback={<ProfileSectionSkeleton />}>
                <ProfilePage params={params}/>
            </Suspense>
            <div>
                <h2 className="font-semibold text-lg md:text-xl mb-4">Posts</h2>
                <div className={"flex flex-wrap gap-4"}>
                    <Suspense fallback={<PostSkeleton className={"flex flex-wrap gap-4"} limit={4}/> }>
                        <ProfilePosts userID={userid} />
                    </Suspense>
                </div>
            </div>
        </main>
    )
}
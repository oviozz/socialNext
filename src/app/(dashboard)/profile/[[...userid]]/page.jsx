
import {getAccountProfile, getOtherProfile} from "@/lib/profileFunctions/actions";
import ProfileSection from "@/components/Profile/ProfileSection";
import NotFound from "@/components/NotFound";
import ProfilePosts from "@/components/Profile/ProfilePosts";
import {Suspense} from "react";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import PostSkeleton from "@/components/Skeleton/PostSkeleton";


export default async function Profile({params}){

    const {userid} = params;
    const {dbUser, status} = await getAccountProfile(userid);

    return (
        !dbUser || status !== 200 ? <NotFound /> : (
            <main className="flex flex-1 flex-col gap-4 md:gap-5 md:p-6">

                <ProfileSection userprofile={dbUser}/>
                <div>
                    <h2 className="font-semibold text-lg md:text-xl mb-4">Posts</h2>
                    <div className={"flex flex-wrap gap-4"}>
                        <Suspense fallback={<PostSkeleton className={"flex flex-wrap gap-4"} limit={dbUser.postCount}/> }>
                            <ProfilePosts userID={userid} />
                        </Suspense>
                    </div>
                </div>
            </main>
        )
    )
}
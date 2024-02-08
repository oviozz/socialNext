
import {getAccountProfile, getOtherProfile} from "@/lib/profileFunctions/actions";
import ProfileSection from "@/components/Profile/ProfileSection";
import NotFound from "@/components/NotFound";
import ProfilePosts from "@/components/Profile/ProfilePosts";
import {Suspense} from "react";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";


export default async function Profile({params}){

    const {userid} = params;
    let userData;
    let dataStatus;

    if (userid){
        const {dbUser, status} = await getOtherProfile(userid);
        userData = dbUser;
        dataStatus = status;
    } else {
        const {dbUser, status} = await getAccountProfile();
        userData = dbUser
        dataStatus = status;
    }

    return (
        !userData || dataStatus !== 200 ? <NotFound /> : (
            <main className="flex flex-1 flex-col gap-4 md:gap-5 md:p-6">

                <ProfileSection userprofile={userData}/>
                <div>
                    <h2 className="font-semibold text-lg md:text-xl mb-4">Posts</h2>
                    <div className={"flex flex-wrap gap-4"}>
                        <Suspense fallback={<h1>Loading...</h1>}>
                            <ProfilePosts userID={userid} />
                        </Suspense>
                    </div>
                </div>
            </main>
        )
    )
}
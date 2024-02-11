
import {getAccountProfile} from "@/lib/profileFunctions/actions";
import ProfileSection from "@/components/Profile/ProfileSection";
import NotFound from "@/components/NotFound";

export default async function ProfilePage({params}){

    const {userid} = params;
    const {dbUser, status} = await getAccountProfile(userid);

    return (
        <ProfileSection userprofile={dbUser} otherUserID={userid}/>
    )
}
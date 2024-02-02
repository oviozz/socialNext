
import {Button} from "@/components/ui/button";
import Link from "next/link";
import AvatarDisplay from "@/components/AvatarDisplay";
import {redirect} from "next/navigation";
import ProfileCompleteAlert from "@/components/ProfileCompleteAlert";


export default function ProfileSection({profileData}){

    const {username, email, bio, createdAt, profilePic, following, followers, postCount} = profileData;

    return (

        <>

            <div className="rounded-lg">
                <div >
                    <AvatarDisplay profilePic={profilePic} username={username} />

                    <div className={"mt-2"}>
                        <h2 className="font-semibold text-lg">@{username}</h2>
                        <p className="mt-1 text-gray-500 dark:text-gray-400">
                            Bio: {bio}
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 my-4">
                        <div>
                            <h3 className="font-semibold">{following.length}</h3>
                            <p className="text-gray-500 dark:text-gray-400">Following</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">{followers.length}</h3>
                            <p className="text-gray-500 dark:text-gray-400">Followers</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">{postCount}</h3>
                            <p className="text-gray-500 dark:text-gray-400">Posts</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 mt-4 mb-4">
                        <Link href={"/setting"}>
                            <Button className="bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200" variant="solid">
                                <SettingsIcon className="h-4 w-4 mr-1" />
                                Edit Profile
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <ProfileCompleteAlert dataConfirm={profileData}/>
        </>
    )

}


function SettingsIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}
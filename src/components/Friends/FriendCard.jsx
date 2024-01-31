
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import Unfollow from "@/components/Unfollow";

const FriendCard = () => {

    return (
        <div className="border shadow-sm rounded-lg lg:max-w-xs w-full">
            <div className="p-4">
                <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-12 h-12 border">
                        <AvatarImage alt="User" src="https://prazwal.vercel.app/assets/profilePic-8c027c9a.jpg" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div className={"flex flex-col"}>
                        <h2 className="font-semibold text-md">prazwal sharma</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">✦ 12 days ago</p>
                    </div>
                </div>
                <p className="text-gray-500 dark:text-gray-400">Followed since: January 1, 2024</p>

                <div className={"flex items-center justify-between"}>
                    <Button className="mt-2" variant="outline">
                        <UserIcon className="w-4 h-4 mr-2" />
                        Visit Profile
                    </Button>

                    <Unfollow />
                </div>
            </div>

        </div>
    )


}

export default FriendCard;

function UserIcon(props) {
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
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}
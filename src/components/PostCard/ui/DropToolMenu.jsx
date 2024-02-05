

import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import Share from "@/components/PostCard/ui/Share";
import Delete from "@/components/PostCard/ui/Delete";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";


export default async function DropToolMenu({postUserID, postCardID}){

    const session = await getServerSession(authOptions);

    return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <Button size="icon" variant="outline">
                    <MoreHorizontalIcon className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className={"flex flex-col"} align="end">
                <Share/>
                {postUserID === session?.user.id ? <Delete deletePostID={postCardID} /> : null}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


function MoreHorizontalIcon(props) {
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
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
        </svg>
    )
}
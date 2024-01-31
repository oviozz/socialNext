
import FriendCard from "@/components/Friends/FriendCard";
import {profileCompletionMiddleware} from "../../../middleware";

function Friend() {

    return (
        <>
            <div className={"flex flex-wrap gap-4 p-4 md:gap-8 md:p-6"}>
                <FriendCard />
                <FriendCard />
                <FriendCard />
                <FriendCard />

            </div>
        </>

    )

}

export default Friend;





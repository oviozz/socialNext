
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import AvatarDisplay from "@/components/AvatarDisplay";


const GetLikeList = async (postID) => {
    const response = await fetch(`http://localhost:3000/api/post/${postID}/like`, {
        method: "GET",
        next: {
            tags: [`post-${postID}`]
        }
    })

    return await response.json();
}

export default async function LikeList({postID}){

    const {likeList} = await GetLikeList(postID)

    return (
        <>
            {
                likeList?.map((likeUser) => (
                    <div key={likeUser._id} className="flex items-center gap-2">
                        <AvatarDisplay className={'w-10 h-10'}
                                       profilePic={likeUser.profilePic}
                                       username={likeUser.username} />
                        <p>{likeUser.username} liked this post</p>
                    </div>
                ))
            }
        </>
    )

}
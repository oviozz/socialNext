
"use client"

import {Button} from "@/components/ui/button";
import {DialogTrigger} from "@/components/ui/dialog";
import {useEffect, useState} from "react";
import {FaHeart} from "react-icons/fa";
import {likePostHandler} from "@/lib/postFunctions/actions";
import {useSession} from "next-auth/react";

export default function LikeText({likeList, postCardID, userId}){

    // const { data: { user: { id: userId } } } = useSession();

    const hasLikedPost = likeList.includes(userId);
    const [isLiked, setIsLiked] = useState(hasLikedPost);
    const [likes, setLikes] = useState(likeList.length);


    useEffect(() => {
        setIsLiked(hasLikedPost);
        setLikes(likeList.length);
    }, [postCardID, hasLikedPost, likeList.length]);

    const likePost = async () => {
        const response = await likePostHandler(postCardID);

        switch (response.status) {
            case 500:
                setIsLiked(false);
                setLikes((prevLikes) => prevLikes - 1);
                break;
            default:
                break;
        }
    }

    const countLike = async () => {
        setIsLiked(prev => !prev)
        setLikes((prevLikes) => (isLiked ? prevLikes - 1 : prevLikes + 1));
    }

    return (
        <>
            <form className={"flex items-center"} action={likePost}>
                <button type={"submit"} onClick={countLike}>
                    <FaHeart size={20} className={isLiked ? 'text-red-500' : null}/>
                </button>
            </form>

            <DialogTrigger asChild className={"w-fit ml-2"}>
                <Button size="sm" variant="link" className={"p-0"}>
                    <span>{likes} Likes</span>
                </Button>
            </DialogTrigger>
        </>
    )

}
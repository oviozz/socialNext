
import {Suspense} from "react";
import PostSkeleton from "@/components/Skeleton/PostSkeleton";
import HomePage from "@/components/Home/HomePage";


export default async function Home() {

    return (
        <Suspense fallback={<PostSkeleton className={"flex flex-col items-center gap-5"} size={"large"} limit={"5"}/>}>
            <HomePage />
        </Suspense>
    )
}

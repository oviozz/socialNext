
import PostCard from "@/components/PostCard/PostCard";
import PostSkeleton from "@/components/Skeleton/PostSkeleton";

const getPosts = async () => {

    try {
        const res = await fetch('http://localhost:3000/api/post', {
            method: 'GET',
            cache: "no-store",
            next: {
                tags: [`homePost`]
            }
        })
        return await res.json();

    } catch (error) {
        console.log(error)
    }
}

export default async function HomePage() {

    const postData = await getPosts();
    const data = postData?.posts

    return (
        <>
            <div className="flex flex-col items-center gap-5">
                {
                    data?.map((post) => (
                        <PostCard key={post._id} size={"large"} postData={post}/>
                    ))
                }
            </div>
        </>
    );
}

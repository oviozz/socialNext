
import CreatePostClient from "@/components/CreatePost/CreatePostClient";
import PostCard from "@/components/PostCard/PostCard";

const getPosts = async () => {

    try {
        const res = await fetch('http://localhost:3000/api/post', {
            method: 'GET',
            cache: "no-store"
        })
        return await res.json();

    } catch (error) {
        console.log(error)
    }
}

export default async function Home() {

    const {posts} = await getPosts();


    return (
        <>
            <div className="flex flex-col items-center gap-5">
                {
                    posts.map((post) => (
                        <PostCard key={post._id} size={"large"} postData={post}/>
                    ))
                }
            </div>

        </>
    );
}

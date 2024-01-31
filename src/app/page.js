
import CreatePostButton from "@/components/CreatePostButton";
import PostCard from "@/components/PostCard/PostCard";

export default function Home() {
    return (
        <>
            <div className="flex flex-col items-center gap-5">
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>

        </>
    );
}

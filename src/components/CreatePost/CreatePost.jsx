
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import CreatePostClient from "@/components/CreatePost/CreatePostClient";

const CreatePost = async () => {

    const session = getServerSession(authOptions);

    return (
        <CreatePostClient session={session}/>
    )

}

export default CreatePost;

import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import CreatePostClient from "@/components/CreatePost/CreatePostClient";

const CreatePost = async () => {

    //{user} = await getServerSession(authOptions);

    //const user = session && session.user ? session.user : null;
    //const { user } = session;

    return <CreatePostClient />

}

export default CreatePost;

import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import ImageLoad from "@/components/PostCard/ui/ImageLoad";
import {Separator} from "@/components/ui/separator";

function CreatePostButton(){

    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button size="sm" variant="outline">
                    <PlusIcon className="h-5 w-5 mr-1" />
                    <span className={"lg:block hidden"}>Create Post</span>
                </Button>
            </DialogTrigger>
            <DialogContent className={"rounded-md"}>
                <DialogHeader>
                    <DialogTitle>Create a New Post</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <form className={"flex flex-col gap-3"}>

                        {/*<div className="space-y-2">*/}
                        {/*    <Label htmlFor="post-title">Title</Label>*/}
                        {/*    <Input autoComplete="off" id="post-title" placeholder="Enter post title" />*/}
                        {/*</div>*/}

                        <div className="space-y-2">
                            <Label htmlFor="post-content">Describe your post</Label>
                            <Textarea autoComplete="off" className={"resize-none h-32 sm:h-20 lg:h-32"} id="post-content" placeholder="Enter post content" />
                        </div>

                        <ImageLoad />

                        <div className="flex justify-end mt-4">
                            <Button type="submit">Submit</Button>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    )


}

export default CreatePostButton;


function PlusIcon(props) {
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
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}

import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export default function Like(){

    return (
        <div className={"flex items-center"}>
            <HeartIcon className="h-5 w-5" />

            <Dialog>
                <DialogTrigger asChild>
                    <Button size="sm" variant="link" className={"p-0 ml-1"}>
                        <span>120 Likes</span>
                    </Button>
                </DialogTrigger>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Likes</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="flex items-center gap-2">
                            <Avatar className="w-8 h-8 border">
                                <AvatarImage alt="User1" src="/placeholder-avatar.jpg" />
                                <AvatarFallback>U1</AvatarFallback>
                            </Avatar>
                            <p>User1 liked this post</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Avatar className="w-8 h-8 border">
                                <AvatarImage alt="User2" src="/placeholder-avatar.jpg" />
                                <AvatarFallback>U2</AvatarFallback>
                            </Avatar>
                            <p>User2 liked this post</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Avatar className="w-8 h-8 border">
                                <AvatarImage alt="User3" src="/placeholder-avatar.jpg" />
                                <AvatarFallback>U3</AvatarFallback>
                            </Avatar>
                            <p>User3 liked this post</p>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )

}


function HeartIcon(props) {
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
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
    )
}
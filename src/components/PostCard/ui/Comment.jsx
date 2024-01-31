
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const SampleComment = () => {
    return (
        <>
            <div className="flex justify-between mr-4 items-center gap-2 overflow-auto">

                <div className={"flex items-center gap-2"}>
                    <Avatar className="w-8 h-8 border">
                        <AvatarImage alt="User1" src="/placeholder-avatar.jpg" />
                        <AvatarFallback>U1</AvatarFallback>
                    </Avatar>
                    <div className={"flex flex-col"}>
                        <h2 className="font-semibold text-md">prazwal sharma</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">5 days ago</p>
                    </div>
                </div>

                <Button className={"text-red-500 hover:text-red-700"} size="sm" variant="outline">
                    <TrashIcon className="h-4 w-4 mr-1" />
                    Delete
                </Button>
            </div>

            <div className={"mt-2"}>
                <p>this is the best post ever!! i have always thought to go on this one trip, going to it has become the most fun time i have had in such a long time.</p>
            </div>

            <Separator className="my-2" />
        </>
    )
}

export default function Comment(){

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm" variant="link">
                    <TextIcon className="h-5 w-5 mr-1" />
                    45 Comments
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Comments</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">

                    <ScrollArea className="h-[17rem] rounded-md">
                        <SampleComment />
                        <SampleComment />
                        <SampleComment />
                        <SampleComment />
                        <SampleComment />
                        <SampleComment />
                        <SampleComment />
                        <SampleComment />
                        <SampleComment />
                        <SampleComment />
                        <SampleComment />
                    </ScrollArea>

                    <Collapsible className="space-y-2">
                        <CollapsibleTrigger asChild>
                            <Button size="sm" variant="outline">
                                Write a comment
                            </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            <Label htmlFor="comment">Write a comment</Label>
                            <Textarea id="comment" placeholder="Enter your comment here..." />
                            <Button className="mt-2">Post Comment</Button>
                        </CollapsibleContent>
                    </Collapsible>
                </div>
            </DialogContent>
        </Dialog>
    )


}


function TextIcon(props) {
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
            <path d="M17 6.1H3" />
            <path d="M21 12.1H3" />
            <path d="M15.1 18H3" />
        </svg>
    )
}


function TrashIcon(props) {
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
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
    )
}

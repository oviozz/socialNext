import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";


export default function Delete(){

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm" variant="ghost" className={"text-red-500 hover:text-red-700"}>
                    <TrashIcon className="h-4 w-4 mr-1" />
                    Delete
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete Post</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <p>Are you sure you want to delete this post?</p>
                </div>
                <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button variant={"destructive"}>Delete</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
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

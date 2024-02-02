
"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {useEffect, useState} from "react";
import Link from "next/link";

export default function ProfileCompleteAlert({dataConfirm}) {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const {username, bio} = dataConfirm;
    return (
        <Dialog open={(!username || !bio) && isClient}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className={"mb-2"}>Complete your profile</DialogTitle>
                    <DialogDescription>
                        Please navigate to the settings page to complete your profile before accessing the rest of the content.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Link href={"/setting"}>
                        <Button>Navigate to Settings</Button>
                    </Link>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

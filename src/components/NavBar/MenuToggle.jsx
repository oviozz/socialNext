
"use client"

import {
    Sheet, SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import {Button} from "@/components/ui/button";
import * as React from "react";
import SideLinks from "@/components/SideBar/SideLinks";
import {cn} from "@/lib/utils";
import Link from "next/link";
import {clsx} from "clsx";
import {Separator} from "@/components/ui/separator";
import AuthButton from "@/components/SideBar/AuthButton";
import {usePathname} from "next/navigation";
import {useSession} from "next-auth/react";


export default function MenuToggle(){

    const pathname = usePathname();
    const { data: session } = useSession()

    const linksData = [
        { name: 'Home', href: '/', icon: HomeIcon },
        { name: 'Friends', href: '/friends', icon: UsersIcon },
        { name: 'Profile', href: '/profile', icon: UserIcon },
        { name: 'Settings', href: `/setting`, icon: SettingsIcon },
    ];

    return (
        <Sheet>
            <SheetTrigger asChild className="lg:hidden">
                <Button size="icon" variant="outline">
                    <MenuIcon className="h-6 w-6" />
                    <span className="sr-only">Toggle sidebar</span>
                </Button>
            </SheetTrigger>
            <SheetContent side={"left"} align="end">
                <nav className={"grid items-start px-0 mt-10 text-md"}>
                    <div className={""}>
                        {
                            linksData.map((link, index) => (
                                <SheetClose key={index} asChild>
                                    <Link
                                        className={clsx(
                                            "flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 transition-all dark:text-gray-400 dark:hover:text-gray-100 hover:text-gray-900",
                                            {
                                                "bg-gray-200 font-semibold dark:bg-gray-800 dark:text-white text-black hover:text-black" : pathname === link.href
                                            }
                                        )}
                                        style={index === linksData.length - 1 ? { marginTop: 'auto' } : {}}
                                        href={link.href}>
                                        {React.createElement(link.icon, { className: "h-4 w-4" })}
                                        {link.name}
                                    </Link>
                                </SheetClose>
                            ))
                        }
                    </div>
                    <Separator className={"my-3 w-full"} />
                    <AuthButton session={session}/>
                </nav>
            </SheetContent>
        </Sheet>
    )


}


function MenuIcon(props) {
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
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}



function HomeIcon(props) {
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
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    )
}






function SettingsIcon(props) {
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
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}



function UserIcon(props) {
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
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}


function UsersIcon(props) {
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
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}


import {Button} from "@/components/ui/button";
import Link from "next/link";
import {getServerSession} from "next-auth";

export default function ProfileTools(params){

    const session = getServerSession();
    const {userid} = params;

    return (
        <>
            {
                userid === session.id ?
                    (
                        <Link href={"/setting"}>
                            <Button className="bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200" variant="solid">
                                Edit Profile
                            </Button>
                        </Link>
                    )
                    : (
                    <Link href={"/setting"}>
                        <Button className="bg-blue-200 text-gray-700 dark:bg-gray-800 dark:text-gray-200" variant="solid">
                            Follow Profile
                        </Button>
                    </Link>
                )
            }
        </>
    )

}
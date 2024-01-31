
"use client"
import {Button} from "@/components/ui/button";
import {useFormStatus} from "react-dom"
import {cn} from "@/lib/utils";

const FormButton = ({text, disable, className}) => {

    const { pending } = useFormStatus();

    return (
        <Button
            disabled={!disable || pending}
            type={"submit"}
            className={cn("w-full flex justify-center items-center bg-gray-900 text-white hover:bg-gray-700 transition-colors duration-200", className)}
            variant="solid"
        >
            <LogInIcon className={"h-4 w-4 mr-2"}/>
            {pending ? `${text}...` : `${text}`}
        </Button>
    )
}

export default FormButton;



function LogInIcon(props) {
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
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" x2="3" y1="12" y2="12" />
        </svg>
    )
}
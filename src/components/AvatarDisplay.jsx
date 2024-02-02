
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {LiaSpinnerSolid} from "react-icons/lia";

const AvatarDisplay = ({profilePic, username}) => {

    return (
        <>
            {
                profilePic ?
                    (
                        <Avatar className="mt-4 w-28 h-28 border">
                            <AvatarImage
                                alt="User"
                                src={profilePic}
                                className={"object-cover"}
                            />
                            <AvatarFallback>{<LiaSpinnerSolid className={"w-12 h-12 animate-spin"}/>}</AvatarFallback>
                        </Avatar>
                    )
                    :
                    <Avatar className="mt-4 w-28 h-28 border">
                        <AvatarFallback className={"text-3xl font-bold"}>{username[0]}</AvatarFallback>
                    </Avatar>
            }
        </>
    )

}

export default AvatarDisplay;
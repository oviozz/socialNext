
import {getProfile} from "@/lib/profileFunctions/actions";
import SettingForm from "@/components/Setting/SettingForm";


export default async function SettingPage(){

    const {dbUser} = await getProfile()

    return (
        <SettingForm formData={dbUser}/>
    )

}
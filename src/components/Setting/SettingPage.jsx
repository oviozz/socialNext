
import SettingForm from "@/components/Setting/SettingForm";
import {getAccountProfile} from "@/lib/profileFunctions/actions";


export default async function SettingPage(){

    const {dbUser} = await getAccountProfile()

    return (
        <SettingForm formData={dbUser}/>
    )

}
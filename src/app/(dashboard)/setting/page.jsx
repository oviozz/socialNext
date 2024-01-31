
import {getProfile} from "@/lib/actions";
import SettingForm from "@/components/Setting/SettingForm";

async function Setting() {

    const {dbUser} = await getProfile()

    return (
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="rounded-lg">
                <div className="">
                    <h2 className="font-semibold text-lg">Account Settings</h2>
                    <SettingForm formData={dbUser}/>
                </div>
            </div>
        </main>
    )

}

export default Setting;
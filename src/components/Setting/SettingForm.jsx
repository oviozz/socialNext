
"use client"
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {useState} from "react";
import {updateProfile} from "@/lib/actions";
import FormButton from "@/components/FormButton";
import toast, {Toaster} from "react-hot-toast";

function SettingForm({formData}) {

    const {username, email, bio, createdAt, profilePic} = formData;
    const [formValue, setFormValue] = useState({
        username,
        email,
        bio,
        createdAt,
        profilePic
    })

    const handleProfilePicChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {

                const base64Data = reader.result.split(',')[1];
                const binaryData = Buffer.from(base64Data, 'base64');

                setFormValue((prev) => (
                    { ...prev, profilePic: binaryData}
                ));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (e) => {

        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value,
        });
    };

    const handleSubmitChanges = async () => {

        const response = await updateProfile(formValue)
        switch (response.status) {
            case 200:
                toast.success(response.message)
                break;
            case 500:
                toast.error(response.error)
                break;
        }

        // const {updatedUser} = await updateProfile(formValue);
        // console.log(updatedUser)
        // if (updatedUser){
        //     setFormValue((prev) => ({
        //         ...prev,
        //         username: updatedUser.username,
        //         email: updatedUser.email,
        //         bio: updatedUser.bio,
        //         profilePic: updatedUser.profilePic,
        //         createdAt: updatedUser.createdAt
        //     }));
        // }
    }

        const isFormDirty = () => {
        return (
            formValue.username !== username ||
            formValue.bio !== bio ||
            formValue.profilePic !== profilePic
        );
    };

    return (
        <>
            <form action={handleSubmitChanges}>
                <Avatar className="mt-4 w-28 h-28 border">
                    <AvatarImage
                        alt="User"
                        src={profilePic}
                        className={"object-cover"}
                    />
                    <AvatarFallback>{username[0]}</AvatarFallback>
                </Avatar>

                <div className="mt-2">
                    <label className="w-fit block text-gray-700 font-semibold text-sm mb-2" htmlFor="profilePic">
                        Change Profile Picture
                    </label>
                    <Input
                        onChange={handleProfilePicChange}
                        name={"profilePic"}
                        type="file"
                        id="profilePic"
                        accept="image/*"
                    />
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Username</label>
                    <Input onChange={handleInputChange} name={"username"} defaultValue={formValue.username} className="mt-1 block w-full" placeholder="Username" type="text" />
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Bio</label>
                    <Input onChange={handleInputChange} name={"bio"} defaultValue={formValue.bio} className="mt-1 block w-full" placeholder="Bio" type="text" />
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
                    <Input disabled defaultValue={formValue.email} className="mt-1 block w-full" placeholder="Email" type="email" />
                </div>
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Account Created</label>
                    <Input disabled defaultValue={formValue.createdAt.split('T')[0]} className="mt-1 block w-full" placeholder="Account Created" type="date" />
                </div>

                <FormButton className={"mt-4"} text={"Save Changes"} disable={isFormDirty()}/>

            </form>

            <Toaster position="bottom-right"/>
        </>
    )

}

export default SettingForm;
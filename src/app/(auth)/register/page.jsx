
"use client"

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {registerAuth} from "@/lib/authFunctions/registerAuth";
import {useState} from "react";
import {redirect} from "next/navigation";
import FormButton from "@/components/FormButton";

export default function Register() {

    const [error, setError] = useState("")
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const registerHandler = async () => {

        const data = {
            email: formData.email,
            password: formData.password
        }

        const response = await registerAuth(data);

        switch (response.status) {
            case 200:
                redirect("/login")
                break;
            case 400:
                setError("Email is already in use.")
                break;
            case 500:
                setError("Something went wrong. Try Again")
                break;
        }
    }

    const isFormValid = formData.email.trim() !== "" && formData.password.trim() !== "";

    return (
        <main className="flex flex-1 flex-col gap-4">
            <div className="rounded-lg">
                <div className="p-4">
                    <h2 className="font-semibold text-lg">Register to your account</h2>
                    <form action={registerHandler}>
                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
                            <Input
                                name="email"
                                className="mt-1 block w-full"
                                placeholder="Email"
                                type="text"
                                value={formData.email}
                                onChange={handleInputChange}
                            /></div>

                        <div className="mt-4">
                            <label
                                className="block text-sm font-medium text-gray-700 dark:text-gray-200">Password</label>
                            <Input
                                name="password"
                                className="mt-1 block w-full"
                                placeholder="Password"
                                type="password"
                                value={formData.password}
                                onChange={handleInputChange}
                            /></div>
                        <div className="mt-4">

                            <FormButton text={"Register"} disable={isFormValid}/>
                        </div>
                        {error && <p className={"text-red-500"}>{error}</p>}
                        <div className="mt-4 text-center">
                            Already have account?
                            <Link
                                className="ml-2 underline text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-50"
                                href={"/login"}
                            >
                                Log in
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

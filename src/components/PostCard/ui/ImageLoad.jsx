
"use client"
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import Image from "next/image";
import {useState} from "react";


const ImageLoad = () => {

    const [imagePreview, setImagePreview] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        // Display image preview
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };


    return (
        <>
            <div className="space-y-2">
                <Label htmlFor="post-image">Upload Image</Label>
                <Input type="file" id="post-image" accept="image/*" onChange={handleFileChange}/>
            </div>

            {imagePreview && (
                <div className="mt-2">
                    <Image
                        src={imagePreview}
                        alt="Image Preview"
                        className="w-full h-48 object-cover rounded border"
                        width={200} // Set a fixed width
                        height={200}
                    />
                </div>
            )}
        </>
    )

}

export default ImageLoad;
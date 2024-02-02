import {getDownloadURL, getStorage, ref, uploadBytes} from "firebase/storage";
import firebase_app from "@/firebase/config";

export async function firebaseUploadImage(userID, imageBlob) {
    const storage = getStorage(firebase_app);
    const storageRef = ref(storage, `profile/${userID}`);

    try {
        const snapshot = await uploadBytes(storageRef, imageBlob);
        return await getDownloadURL(snapshot.ref);
    } catch (uploadError) {
        console.error('Error uploading image: ', uploadError);
        return null;
    }
}

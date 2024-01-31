
"use server"
export const registerAuth = async (formData) => {

    try {
        const res = await fetch(`http://localhost:3000/api/auth/register`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(formData),
            "content-type": "application/json"
        });


        return res.json()

    } catch (error) {
        console.error("Error in registerHandler:", error);
        throw error;
    }
};
"use server"

import { signIn } from "@/auth"

export const formAction = async(formData) => {

    await signIn("resend", formData)

}



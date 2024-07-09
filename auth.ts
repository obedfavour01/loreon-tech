import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import Resend from "next-auth/providers/resend"


const prisma = new PrismaClient()
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
    providers: [
      Resend({
        // If your environment variable is named differently than default
        apiKey:process.env.AUTH_RESEND_KEY,
        from: "obedfavour@gmail.com"
      }),
    ],
})
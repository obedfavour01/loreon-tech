"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'


import { z } from "zod"


import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";


import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import Link from "next/link";




const formSchema = z.object({
    email: z.string().email().min(3),
    password: z.string().min(6),
    terms: z.boolean()
  })


const SignInForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            terms: false
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {

        console.log(values);
    }

    return (
        <div className='p-12 shadow-md rounded-3xl space-y-6'>
            <header>
                <p className="font-bold text-center">
                    Create your Loreon Account 👋🏽
                </p>
                <p className='text-[#586283] text-center'>
                    Sign up into Loreon by creating an account for free
                </p>

            </header>


            <Form {...form}>

                <form 
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem
                                className="w-full xs:max-lg:w-full">
                                <FormLabel>
                                    Email Address
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        type={"email"}
                                        placeholder="Your First Name"
                                        className="bg-gray-100" {...field} 
                                    />
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Choose a password</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        placeholder="Enter your password"
                                        className="bg-gray-100" 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        )}
                    />


                    <div className="flex justify-between items-center">
                        <FormField
                            control={form.control}
                            name="terms"
                            render={({ field }) => {
                                return (
                                    <FormItem
                                        className="flex items-end gap-2"
                                    >
                                        <FormControl>
                                            <Checkbox
                                                checked
                                                className="flex items-center"
                                            />
                                        </FormControl>
                                        <FormLabel className="font-normal items-top ">

                                            Remember Me
                                        </FormLabel>
                                    </FormItem>
                                )
                            }}
                        />


                        <Link href="#"
                            className="text-[#586283] text-sm">forgot password</Link>
                    </div>


                    <Button
                        type="submit"
                        className="w-full bg-loreonblue">
                        Login
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default SignInForm
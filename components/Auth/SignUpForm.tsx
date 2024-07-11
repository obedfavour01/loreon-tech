"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import {  SignUpFormSchema } from "@/lib/utils";

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
import InputPassword from "../ui/InputPassword";

const SignUpForm = () => {
    const form = useForm<z.infer<typeof SignUpFormSchema>>({
        resolver: zodResolver(SignUpFormSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phoneNumber: 234,
            password: "",
            confirm: "",
            terms: false
        }
    })
    
    const onSubmit = (values: z.infer<typeof SignUpFormSchema>) => {

            console.log(values);
        }

    return(
        <div className = 'p-12 shadow-md' >
            <p className="font-bold text-center">
                Create your Loreon Account 👋🏽
            </p>
            <p className='text-[#586283] text-center'>
                Sign up into Loreon by creating an account for free
            </p>



            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-7">
                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem className="w-full xs:max-lg:w-full">
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Full Name" className="bg-gray-100" {...field} />
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        )}
                    />


                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="w-full xs:max-lg:w-full">
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input type={"email"} placeholder="Your First Name" className="bg-gray-100" {...field} />
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem className="w-full xs:max-lg:w-full">
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <Input type={"tel"} placeholder="Your First Name" className="bg-gray-100" {...field} />
                                </FormControl>
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
                                    <InputPassword
                                        placeholder="Enter your password" 
                                         {...field} />
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="confirm"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>
                                    Confirm Password
                                </FormLabel>
                                <FormControl>
                                    <InputPassword
                                        placeholder="Confirm password"  
                                        {...field} />
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


                        <Link href="#" className="text-[#586283] text-sm">forgot password</Link>
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-loreonblue">
                        Login
                    </Button>
                </form>

            </Form>

        </div >
    )
}

export default SignUpForm
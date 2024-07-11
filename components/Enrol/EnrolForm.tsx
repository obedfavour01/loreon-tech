"use client"
import { AiFillInfoCircle } from "react-icons/ai";
import Image from "next/image"


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import { formSchema } from "@/lib/utils";

import {z} from "zod"



import { Button } from "@/components/ui/button"
import {
Form,
FormControl,
FormDescription,
FormField,
FormItem,
FormLabel,
FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "../ui/checkbox"



const items = [
    {
        id: "recents",
        name:"devops",
        label: "DevOps",
    },
    {
        id: "home",
        name: "devOpsOneOnone",
        label: "DevOps(One-On-One)",
    },
    {
        id: "applications",
        name:"data",
        label: "Data",
    },
    {
        id: "desktop",
        name: "dataOneOnOne",
        label: "Data(One-On-One)"
    }

] as const



const EnrolForm = () => {

    const lorenBlue = "#0069FF";

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          firstName: "",
        },
    })


    return (
        <Form {...form}>
            <form className="space-y-8">

                <div className="flex gap-4 xs:max-md:flex-col">

                    <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                            <FormItem className="w-1/2 xs:max-lg:w-full">
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your First Name" className="bg-gray-100" {...field} />
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                            <FormItem className="w-1/2 xs:max-lg:w-full">
                                <FormLabel>Last Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your Last Name" className="bg-gray-100" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex gap-4 xs:max-md:flex-col">

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="w-1/2 xs:max-lg:w-full">
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
                            <FormItem className="w-1/2 xs:max-lg:w-full">
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <Input type={"tel"} placeholder="Your First Name" className="bg-gray-100" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex gap-4 xs:max-md:flex-col">

                    <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                            <FormItem className="w-1/2 xs:max-lg:w-full">
                                <FormLabel>Country</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your Country" className="bg-gray-100" {...field} />
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem className="w-1/2 xs:max-lg:w-full">
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                    <Input placeholder="City Of Residence" className="bg-gray-100" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex gap-4 xs:max-md:flex-col">

                    <FormField
                        control={form.control}
                        name="loreon"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>How did you hear about Loreon</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your First Name" className="bg-gray-100" {...field} />
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        )}
                    />
                </div>

                <div>
                    <div className="mb-4">
                        <FormLabel className="text-base">Which Track are you applying to</FormLabel>
                        <FormDescription>

                        </FormDescription>
                    </div>
                    {items.map((item) => (
                        <FormField
                            key={item.id}
                            control={form.control}
                            name= "track"
                            render={({ field }) => {
                                return (
                                    <FormItem
                                        key={item.id}
                                        className="flex items-end gap-2"
                                    >
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value?.toString().includes(item.id)}
                                                className="flex items-center"
                                            />
                                        </FormControl>
                                        <FormLabel className="font-normal items-top ">
                                            {item.label}
                                        </FormLabel>
                                    </FormItem>
                                )
                            }}
                        />
                    ))}
                    <FormMessage />

                </div>


                <div className="flex gap-4 xs:max-lg:flex-col">

                    <FormField
                        control={form.control}
                        name="amount"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Amount</FormLabel>
                                <FormControl>
                                    <Input placeholder="900,000" className="bg-gray-100 placeholder:text-2xl py-4" {...field} />
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        )}
                    />
                </div>


                <div className="flex gap-4 xs:max-lg:flex-col">
                    <FormField
                        control={form.control}
                        name="cardName"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Cardholder name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Fullstack Mechanic" className="bg-gray-100" {...field} />
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        )}
                    />
                </div>


                <div className="flex gap-4 xs:max-lg:flex-col">
                    <FormField
                        control={form.control}
                        name="cardNumber"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Card Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="1234 5678 9801 2345" className="bg-gray-100 " {...field} />
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        )}
                    />
                </div>


                <div className="ml-auto w-max">
                    <Image
                        width={800}
                        height={300}
                        alt="payment"
                        src={"/assets/images/payment.png"}
                        className="h-max w-max"
                    />
                </div>


                <div className="flex gap-4 xs:max-lg:flex-col">

                    <FormField
                        control={form.control}
                        name="date"
                        render={({ field }) => (
                            <FormItem className="w-1/2 xs:max-lg:w-full">
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input 
                                        type = "date" placeholder="12/23" className="bg-gray-100" {...field} />
                                </FormControl>
                                <FormMessage></FormMessage>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="cvv"
                        render={({ field }) => (
                            <FormItem className="w-1/2 xs:max-lg:w-full">
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input 
                                    type="number"
                                    placeholder="Your First Name" className="bg-gray-100" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>



                <div className="flex gap-2">
                    <AiFillInfoCircle fill={lorenBlue} size={20} />
                    <small className="text-base text-[#586283]">
                        Card payment may take up to 24 hours to be processed
                    </small>
                </div>


                <div>
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
                                            checked={false}
                                            className="flex items-center"
                                        />
                                    </FormControl>
                                    <FormLabel className="font-normal items-top ">
                                        I agree to <span className="text-loreonblue">Loreon’s Privacy Policy</span>, and
                                        <span className="text-loreonblue"> Terms and conditions.</span>
                                    </FormLabel>
                                </FormItem>
                            )
                        }}
                    />
                </div>
                <Button type="submit" className="w-full bg-loreonblue">Continue to Enrol</Button>
            </form>
        </Form>
    )
}

export default EnrolForm
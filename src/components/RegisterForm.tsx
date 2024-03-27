import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { toast, useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import {
  getAuthToken,
  request,
  setAuthHeader,
} from "@/lib/helpers/axios_helper";
import axios from "axios";
import { Toast } from "./ui/toast";

const FormSchema = z.object({
  firstName: z.string().min(4, "must be at least 4 characters"),
  lastName: z.string().min(4, "must be at least 4 characters"),
  username: z.string().min(7, {
    message: "Username must be at least 7 characters.",
  }),
  password: z.string().min(7, {
    message: "Username must be at least 7 characters.",
  }),
  role: z.string()
  // .refine((data) => data.confirm === data.password, {
  //   message: "Password did not match",
  //   path: ["confirm"],
  // }),
});

export default function RegisterForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      role: "USER"
      // confirm: "",
    },
  });

  const { toast } = useToast()



  async function onRegister(values: any) {

    try {
        const response = await axios.post("/register", values);

        if (response.status === 200) {
            setAuthHeader(response.data.token);
            toast({ title: "Registration successful!"}); // Show success toast
        } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
 
    } catch (error) {
        setAuthHeader(null);
        console.error("Registration failed:", error);
        toast({ title: "Registration failed", variant: "destructive" }); // Show error toast

    }
}

  function onSubmit(values: any) {
    onRegister(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="First Name"
                  {...field}
                  type="firstName"
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Last Name"
                  {...field}
                  type="lastName"
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input
                  placeholder="Username"
                  {...field}
                  type="username"
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Password"
                  {...field}
                  type="password"
                  onChange={field.onChange}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name=""
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Confirm Password"
                  {...field}
                  type="password"
                  onChange={field.onChange}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        /> */}
        <Button type="submit" className="w-full flex gap-2">
          Register
        </Button>
      </form>
    </Form>
  );
}

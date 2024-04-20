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
import { setAuthHeader } from "@/lib/helpers/axios_helper";
import axios from "axios";
import { Toast } from "./ui/toast";
import { useState } from "react";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  firstName: z.string().min(4, "must be at least 4 characters"),
  lastName: z.string().min(4, "must be at least 4 characters"),
  username: z.string().min(7, {
    message: "Username must be at least 7 characters.",
  }),
  password: z.string().min(7, {
    message: "Username must be at least 7 characters.",
  }),
  confirm: z.string(),
  role: z.string(),
  balance: z.number(),
  totalDeposited: z.number(),
  totalWithdrawn: z.number(),

  
})
.refine((data) => data.confirm === data.password, {
  message: "Password did not match",
  path: ["confirm"],
});

export default function RegisterForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      role: "USER",
      balance: 10000,
      totalDeposited: 11000,
      totalWithdrawn: 1000,
    },
  });

  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); // Initialize useRouter

  async function onRegister(values: any) {
    setIsLoading(true);

    try {
      const response = await axios.post("/register", values);

      if (response.status === 200) {
        setAuthHeader(response.data.token);
        toast({ title: "Registration successful!" }); // Show success toast
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      setAuthHeader(null);
      console.error("Registration failed:", error);
      toast({ title: "Registration failed", variant: "destructive" }); // Show error toast
    } finally {
      setIsLoading(false); // End loading
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
        <FormField
          control={form.control}
          name="balance"
          render={({ field }) => <Input {...field} type="hidden" />}
        />
        <FormField
          control={form.control}
          name="totalDeposited"
          render={({ field }) => <Input {...field} type="hidden" />}
        />
        <FormField
          control={form.control}
          name="totalWithdrawn"
          render={({ field }) => <Input {...field} type="hidden" />}
        />

        <FormField
          control={form.control}
          name="confirm"
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
        /> 
        <Button
          type="submit"
          className="w-full flex gap-2"
          disabled={isLoading}
        >
          {isLoading ? <Loader2 className="animate-spin" /> : "Register"}
        </Button>
      </form>
    </Form>
  );
}

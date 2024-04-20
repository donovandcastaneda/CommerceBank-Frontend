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

import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import axios from "axios";
import { setAuthHeader } from "@/lib/helpers/axios_helper";
import { useState } from "react";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  username: z.string().min(7, {
    message: "Username is incorrect",
  }),
  password: z.string().min(7, {
    message: "Password is incorrect",
  }),
  // confirm: z.string()
}) 
// .refine((data) => data.confirm === data.password, {
//   message: "Password did not match",
//   path: ["confirm"],
// });

export default function SignInForm() {
  const form =
    useForm <
    z.infer<typeof FormSchema>>({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        username: "",
        password: "",
        // confirm: "",
      },
    });

    const [isLoading, setIsLoading] = useState(false); 
    const router = useRouter(); 


    async function onLogin(values: any) {
      setIsLoading(true); 
  
      try {
          const response = await axios.post("/login", values);
      

          if (response.status === 200) {
              setAuthHeader(response.data.token);
              toast({ title: "Login successful!"}); 
  
              if (response.data && response.data.id) {
                  const id = response.data.id;
                  router.push(`/dashboard/${id}`);

              } else {
                  console.error("Missing user data in response:", response.data);
                  throw new Error("User data is missing in the response");
              }
  
          } else {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
      } catch (error) {
          setAuthHeader(null);
          console.error("Login failed:", error);
          toast({ title: "Login failed", variant: "destructive" }); // Show error toast
      }
      finally {
          setIsLoading(false); // End loading
      }
  }
  
  
    function onSubmit(values: any) {
      onLogin(values);
    }

  return (

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
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
        />  */}
        <Button type="submit" className="w-full flex gap-2" disabled={isLoading}>
  {isLoading ? <Loader2 className="animate-spin" /> : 'Sign In'}
</Button>

      </form>
    </Form>
  

  );
}
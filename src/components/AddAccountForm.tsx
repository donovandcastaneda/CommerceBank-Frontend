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
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useAuth } from "@/context/authContext";

const FormSchema = z.object({
  account_name: z.string().min(4, "must be at least 4 characters"),
  account_type: z.string(),
  balance: z.number(),
  user_id: z.any()

});

export default function RegisterForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { user, token, fetchUserDetails} = useAuth();

  useEffect(() => {
    if (token && user?.id) {
      fetchUserDetails(user.id, token);
    }
  }, [user?.id, token, fetchUserDetails]);

  
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      account_name: "",
      account_type: "",
      balance: 0,
      user_id: user?.id,
    },
  });

 

  async function onRegister(values: any) {
    setIsLoading(true);
    console.log("Submitting with values:", values);  // Log the values being submitted
    

    try {
      const response = await axios.post("/api/accounts", values, {
        headers: {
          Authorization: `Bearer ${token}`,  // Assuming 'Bearer' token type
        }
     });
     
      if (response.status === 200 || 201) {
        setAuthHeader(response.data.token);
        toast({ title: "Account creation successful!" });
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      setAuthHeader(null);
      console.error("Account  creation failed:", error);
      console.log(error)
      console.log(values)
      toast({ title: "Account  creation failed", variant: "destructive" });
    } finally {
      setIsLoading(false);
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
          name="account_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Account Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Create a account name"
                  {...field}
                  type="account_name"
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="account_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Account Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a account type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="CHECKING">Checking</SelectItem>
                  <SelectItem value="SAVINGS">Savings</SelectItem>
                </SelectContent>
              </Select>
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
          name="user_id"
          render={({ field }) => <Input {...field} type="hidden" />}
        />


        <Button
          type="submit"
          className="w-full flex gap-2"
          disabled={isLoading}
        >
          {isLoading ? <Loader2 className="animate-spin" /> : "Create Account"}
        </Button>
      </form>
    </Form>
  );
}

"use client"
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast, useToast } from "@/components/ui/use-toast";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/authContext";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import axios from "axios";

const FormSchema = z.object({
  firstName: z.string().min(1).optional(),
  lastName: z.string().min(1).optional(),
  username: z.string().min(1).optional(),
});

export function ProfileForm() {
  const { user, token, fetchUserDetails } = useAuth();

  useEffect(() => {
    if (token && user?.id) {
      fetchUserDetails(user.id, token);
    }
  }, [user?.id, token, fetchUserDetails]);

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",}
  });

  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  async function onUpdate(values: any) {
    setIsLoading(true);

    try {
      const response = await axios.put(`/api/users/1`, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        toast({ title: "Profile updated successfully!" });
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Update failed:", error);
      toast({ title: "Update failed", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  }

  function onSubmit(values: any) {
    onUpdate(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="First Name" type="text" />
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
                <Input {...field} placeholder="Last Name" type="text" />
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
                <Input {...field} placeholder="Username" type="text" />
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
          {isLoading ? <Loader2 className="animate-spin" /> : "Update Profile"}
        </Button>
      </form>
    </Form>
  );
}

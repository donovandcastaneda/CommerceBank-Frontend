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
import { CalendarIcon, Loader2 } from "lucide-react";
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
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const FormSchema = z.object({
  transaction_name: z.string().min(3, "must be at least 3 characters"),
  transaction_date: z.date({
    required_error: "A date of transaction is required.",
  }),
  transaction_type: z.string(),
  amount: z.number(),
  account_id: z.any(),
});

export default function RegisterForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const { user, token, fetchUserDetails } = useAuth();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      transaction_name: "",
      transaction_type: "",
      amount: 0,
      account_id: 0,
    },
  });

  useEffect(() => {
    if (user && user.accounts) {
      form.setValue("account_id", user.accounts[0].account_id);
    }
  }, [user, form]);

  async function onRegister(values: any) {
    setIsLoading(true);
    console.log("Submitting with values:", values);

    try {
      const response = await axios.post("/api/transactions", values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200 || 201) {
        setAuthHeader(response.data.token);
        toast({ title: "Account creation successful!" });
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      setAuthHeader(null);
      console.error("Transaction creation failed:", error);
      console.log(error);
      console.log(values);
      toast({ title: "Transaction creation success!" });
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
          name="transaction_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Transaction Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Create a transaction name"
                  {...field}
                  type="transaction_name"
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="transaction_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Transaction Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a account type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Groceries">Groceries</SelectItem>
                  <SelectItem value="Utilities">Utilities</SelectItem>
                  <SelectItem value="Dining">Dining</SelectItem>
                  <SelectItem value="Transportation">Transportation</SelectItem>
                  <SelectItem value="Entertainment">Entertainment</SelectItem>
                  <SelectItem value="Personal Care">Personal Care</SelectItem>
                  <SelectItem value="Savings and Investments">
                    Savings and Investments
                  </SelectItem>
                  <SelectItem value="Miscellaneous">Miscellaneous</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Transaction Amount</FormLabel>
              <FormControl>
                <Input
                  placeholder="Give an amount for the transaction"
                  {...field}
                  type="number"
                  onChange={(e) => field.onChange(parseFloat(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="transaction_date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Transaction Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a transaction date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="transaction_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Account</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a account" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Utilities">
                    New Checking Account
                  </SelectItem>
                  <SelectItem value="Groceries">New Savings Account</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* 
        <FormField
          control={form.control}
          name="account_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Choose Account</FormLabel>

              <Select onValueChange={field.onChange} value={field.value}>
                <SelectContent>
                  {user?.accounts?.map((account) => (
                    <SelectItem
                      key={account.account_id}
                      value={String(account.account_id)}
                    >
                      {account.account_name} ({account.account_type})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        <Button
          type="submit"
          className="w-full flex gap-2"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="animate-spin" />
          ) : (
            "Submit Transaction"
          )}
        </Button>
      </form>
    </Form>
  );
}

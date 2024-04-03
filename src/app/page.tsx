"use client";
import SignInForm from "@/components/SignInForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CheckCircleIcon,
  PiggyBankIcon,
  HomeIcon,
  TrendingUpIcon,
  LayoutDashboard,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container min-h-screen flex flex-col items-center justify-center">
      <section className="w-full pt-48 pb-10">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="space-y-4 mt-[-75px]">
                {" "}
                {/* Adjust the margin-top as needed to move the text higher */}
                <h1 className="text-3xl font-bold  sm:text-5xl xl:text-6xl/none">
                  <span className="text-green-800">Manage </span> and{" "}
                  <span className="text-green-800"> Send </span>
                  <br />
                  Money Easy.
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Your trusted partner in finance. Secure your future with our
                  range of savings and banking options.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="pb-10">
                <div className=" relative bg-white bg-opacity-30 shadow-lg rounded-3xl p-20  bg-clip-padding border border-gray-200 backdrop-blur-lg backdrop-filter">
                  <SignInForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Our Services
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Let us help you manage your finances with our range of 
              services.
            </p>
          </div>
          <div className="mx-auto w-full max-w-[900px] grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-1.5">
              <CheckCircleIcon className="mx-auto h-10 w-10" />
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold">Checking Accounts</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Access your money easily with our checking accounts.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <PiggyBankIcon className="mx-auto h-10 w-10" />
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold">Savings Accounts</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Start saving for the future with our high-interest savings
                  accounts.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <LayoutDashboard className="mx-auto h-10 w-10" />
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold">Custom Dashboard</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Personalized dashboard made with your finances in mind
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <TrendingUpIcon className="mx-auto h-10 w-10" />
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold">Investment Options</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Grow your wealth with our diverse investment options and
                  expert advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

  <section className="w-full py-12 md:py-24 lg:py-32 border-t border-gray-200"> {/* Added border-t and border-gray-200 */}
          <div className="container grid items-center justify-center gap-6 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Meet our Customers</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Trusted by the best in the world. Trusted worldwide, accessible to all. 
              </p>
            </div>
            <div className="divide-y rounded-lg border">
              <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <Image
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/103f94e3ac344fffb634b362c7ddde3a.jpg"
                    width="160"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <Image
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/DoodleBob.webp"
                    width="160"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-8">
                  <Image
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/images.jpeg"
                    width="140"
                  />
                </div>
              </div>
              <div className="grid w-full grid-cols-3 items-stretch justify-center divide-x md:grid-cols-3">
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <Image
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/s.jpeg"
                    width="160"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <Image
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/spongebob_chicken.webp"
                    width="160"
                  />
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                  <Image
                    alt="Logo"
                    className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                    height="70"
                    src="/e6fUb5jK6TxPu6NuyDlB53P_6c9I7HQ5FIPuPqKAWq4.webp"
                    width="160"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/register"
              >
                Register Now
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Learn more
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Experience the best banking has to offer.
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Let us focus on your finances.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
              Stay in the know with our email newsletter.<span> </span>
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>

      
    </main>
  );
}

"use client";
import GoBackButton from "@/components/GoBackButton";
import RegisterForm from "@/components/RegisterForm";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main className="container min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8">
      
        {/* Card section */}
        <Link
          href='/'
          className={cn(
            buttonVariants({ variant: 'link' }),
            'self-start -mt-20'
          )}>
          <ChevronLeft className='mr-2 h-4 w-4' />
          Home
        </Link>

        <div className=" relative bg-white bg-opacity-30 shadow-lg rounded-3xl py-20 px-36 bg-clip-padding border border-gray-200 backdrop-blur-lg backdrop-filter">
          <div className="">
            <RegisterForm />
          </div>
          
        </div>
        
      </div>
  
    </main>
  );
};

export default page;

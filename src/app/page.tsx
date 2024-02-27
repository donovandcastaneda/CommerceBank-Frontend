"use client";
import RegisterForm from "@/components/RegisterForm";
import SignInForm from "@/components/SignInForm";
import AuthContent from "@/components/auth/auth-content";
import Image from "next/image";



export default function Home() {
  return (
    <main className="container min-h-screen flex flex-col items-center justify-center">
<div className="flex flex-col md:flex-row justify-center items-start w-full gap-4 md:gap-x-32">
        {/* Text section */}
        <div className="flex flex-col py-4 "> 
          <h1 className="text-7xl font-bold">
            <span className="text-green-800">Manage </span> and{" "}
            <span className="text-green-800"> Send </span><br/>
            Money Easy.
          </h1>
        </div>
        {/* Card section */}
        <div className="pb-10">
        <div className=" relative bg-white bg-opacity-30 shadow-lg rounded-3xl p-20  bg-clip-padding border border-gray-200 backdrop-blur-lg backdrop-filter">
            <SignInForm />
        </div>
        </div>
      </div>
    </main>
  );
}

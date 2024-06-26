"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Globe, Menu, X } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "./ui/credenza";
import SignInForm from "./SignInForm";
import RegisterForm from "./RegisterForm";
import { useRouter } from "next/router";
import { useAuth } from "@/context/authContext";
import { UserNav } from "./UserNav";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { user, logout } = useAuth();


  return (
    <nav className="sticky inset-x-0 top-0 z-30 h-14 w-full border-b border-gray-200 bg-green-800 backdrop-blur-lg transition-all">
      <div className="container flex h-14 items-center justify-between">
        <Link
          href="/"
          className="z-40 flex font-semibold text-white whitespace-nowrap"
        >
          Commerce Bank
        </Link>
        <div className="sm:hidden flex items-center">
          <button onClick={() => setToggleMenu(!toggleMenu)}>
            {toggleMenu ? (
              <X className="text-white h-6 w-6 cursor-pointer" />
            ) : (
              <Menu className="text-white h-6 w-6 cursor-pointer" />
            )}
          </button>
        </div>
        {/* Desktop Menu - Conditionally render based on user authentication */}
        <div className="hidden sm:flex items-center space-x-4">
          {user ? (
            <>
              <Link href={`/dashboard/1`}>
                <Button variant="secondary">Dashboard</Button>
              </Link>
              <UserNav />
            </>
          ) : (
            <>
              <Credenza>
                <CredenzaTrigger asChild>
                  <Button variant="secondary">Sign In</Button>
                </CredenzaTrigger>
                <CredenzaContent>
                  <CredenzaHeader>
                    <CredenzaTitle>Sign In</CredenzaTitle>
                    <CredenzaDescription>
                      Log in to bank with Commerce Bank
                    </CredenzaDescription>
                  </CredenzaHeader>
                  <CredenzaBody>
                    <SignInForm />
                  </CredenzaBody>
                  <CredenzaFooter>
                    <CredenzaClose asChild>
                      <Button variant="outline">Close</Button>
                    </CredenzaClose>
                  </CredenzaFooter>
                </CredenzaContent>
              </Credenza>
              <Credenza>
                <CredenzaTrigger asChild>
                  <Button>
                    Register <ArrowRight className="ml-1.5 h-5 w-5" />
                  </Button>
                </CredenzaTrigger>
                <CredenzaContent>
                  <CredenzaHeader>
                    <CredenzaTitle>Register </CredenzaTitle>
                    <CredenzaDescription>
                      Register a account to bank with Commerce Bank.
                    </CredenzaDescription>
                  </CredenzaHeader>
                  <CredenzaBody>
                    <RegisterForm />
                  </CredenzaBody>
                  <CredenzaFooter>
                    <CredenzaClose asChild>
                      <Button variant="outline">Close</Button>
                    </CredenzaClose>
                  </CredenzaFooter>
                </CredenzaContent>
              </Credenza>
            </>
          )}
        </div>
        {/* Mobile Menu - Toggled visibility */}
        <div
          className={`${
            toggleMenu ? "flex" : "hidden"
          } sm:hidden absolute top-full left-0 w-full bg-zinc-300 flex-col items-center py-4 space-y-3`}
        >
          {user ? (
            <>
              <Link href="/dashboard">
                <Button variant="secondary">Dashboard</Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="secondary">Profile</Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="secondary">Settings</Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="secondary">Add Acount</Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="secondary">Add Transaction</Button>
              </Link>
              <Button variant="secondary" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Credenza>
                <CredenzaTrigger asChild>
                  <Button variant="secondary">Sign In</Button>
                </CredenzaTrigger>
                <CredenzaContent>
                  <CredenzaHeader>
                    <CredenzaTitle>Sign In</CredenzaTitle>
                    <CredenzaDescription>
                      Log in to bank with Commerce Bank
                    </CredenzaDescription>
                  </CredenzaHeader>
                  <CredenzaBody>
                    <SignInForm />
                  </CredenzaBody>
                  <CredenzaFooter>
                    <CredenzaClose asChild>
                      <Button variant="outline">Close</Button>
                    </CredenzaClose>
                  </CredenzaFooter>
                </CredenzaContent>
              </Credenza>
              <Credenza>
                <CredenzaTrigger asChild>
                  <Button>Register</Button>
                </CredenzaTrigger>
                <CredenzaContent>
                  <CredenzaHeader>
                    <CredenzaTitle>Register </CredenzaTitle>
                    <CredenzaDescription>
                      Register a account to bank with Commerce Bank.
                    </CredenzaDescription>
                  </CredenzaHeader>
                  <CredenzaBody>
                    <RegisterForm />
                  </CredenzaBody>
                  <CredenzaFooter>
                    <CredenzaClose asChild>
                      <Button variant="outline">Close</Button>
                    </CredenzaClose>
                  </CredenzaFooter>
                </CredenzaContent>
              </Credenza>
            </>
          )}
        </div>{" "}
      </div>
    </nav>
  );
};

export default Navbar;

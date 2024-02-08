"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="containersticky inset-x-0 top-0 z-30 h-14 w-full border-b border-gray-200 bg-green-800 backdrop-blur-lg transition-all">
      <div className="container flex h-14 items-center justify-between border-b border-zinc-200 ">
        <Link href="/" className="z-40 flex font-semibold text-white whitespace-nowrap">
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
          {/* Desktop Menu - Always visible on medium screens and up */}
          <div className="hidden sm:flex items-center space-x-4">
          <Link
            href="/sign-in"
            className={`${buttonVariants({
              variant: "ghost",
              size: "sm",
            })} text-white`}
          >
            Sign In
          </Link>

          <Link
            href="/register"
            className={`${buttonVariants({
              size: "sm",
            })} text-white`}
          >
            Register <ArrowRight className="ml-1.5 h-5 w-5" />
          </Link>
        </div>
          
       {/* Mobile Menu - Toggled visibility */}
       <div
          className={`${
            toggleMenu ? "flex" : "hidden"
          } sm:hidden absolute top-full left-0 w-full bg-zinc-200 flex-col items-center py-4 space-y-3`}
        >
          <Link
            href="/sign-in"
            className={`${buttonVariants({
              variant: "ghost",
              size: "sm",
            })} text-white py-2`}
          >
            Sign In
          </Link>

          <Link
            href="/sign-up"
            className={`${buttonVariants({
              size: "sm",
            })} text-white py-2`}
          >
            Register 
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

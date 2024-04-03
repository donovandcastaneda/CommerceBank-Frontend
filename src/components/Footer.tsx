import Link from "next/link"
import Image from "next/image"
import { ChevronRightIcon, InstagramIcon, } from "lucide-react";


const Footer = () => {


  return (
    <footer className="bg-green-800 dark:bg-gray-950">
      <div className="container grid  px-4 py-12 md:px-6 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_500px]">
        
       
        <div className="space-y-3 text-white">
          <div className=" ">
            <h3 className="font-semibold">Contact Us</h3>
            <p className="text-sm leading-loose">
              Have questions? Were here to help. Contact us by phone, email or in person at one of our branches.
            </p>
          </div>
          <div className=" ">
            <h3 className="font-semibold">Call Us</h3>
            <p className="text-sm leading-loose">1-800-123-4567</p>
          </div>
          <div className="">
            <h3 className="font-semibold">Email Us</h3>
            <p className="text-sm leading-loose">support@Commercebank.com</p>
          </div>
        </div>
        <div className="space-y-3 text-white">
          <div className="">
            <h3 className="font-semibold">About Commerce Bank</h3>
            <p className="text-sm leading-loose">
              Learn more about our mission, values, and commitment to our customers.
            </p>
          </div>
          <div className="">
            <h3 className="font-semibold">Privacy Policy</h3>
            <p className="text-sm leading-loose">
               Read our Privacy Policy to understand how we protect your 
              information.
            </p>
          </div>
          <div className="">
            <h3 className="font-semibold">Terms of Service</h3>
            <p className="text-sm leading-loose">
              By using our website, you agree to our Terms of Service. 
            </p>
          </div>
        </div>
        <div className="text-white py-5 flex flex-col md:gap-2 md:flex-row lg:flex-col xl:flex-row items-start justify-start">
          <div className="grid gap-2">
            <h3 className="font-semibold">Follow Us</h3>
            <div className="flex items-center gap-2">
              <FacebookIcon className="h-4 w-4 opacity-60 hover:opacity-100 transition-opacity" />
              <TwitterIcon className="h-4 w-4 opacity-60 hover:opacity-100 transition-opacity" />
              <InstagramIcon className="h-4 w-4 opacity-60 hover:opacity-100 transition-opacity" />
              <LinkedinIcon className="h-4 w-4 opacity-60 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="text-white container flex items-center justify-between px-4 py-4 md:px-6">
          <p className="text-xs">© 2024 Commerce Bank. All rights reserved.</p>
          <nav className="flex gap-4">
            <Link className="text-xs hover:underline underline-offset-4" href="/about">
              About 
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="/contact">
              Contact 
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="/policy">
              Privacy Policy
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="/terms">
              Terms & Conditions
            </Link>
            
          </nav>
        </div>
      </div>
    </footer>
  )
}

function BanknoteIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  )
}


function FacebookIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function LinkedinIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
export default Footer
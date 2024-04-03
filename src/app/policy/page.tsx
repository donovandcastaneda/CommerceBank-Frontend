
import Link from "next/link"
import { JSX, SVGProps } from "react";

export default function Component() {
  return (
    <>
   
      <div className="py-16 w-full">
        <div className="container px-4 md:px-6">
          <div className="mx-auto prose prose-gray max-w-3xl dark:prose-invert md:max-w-4xl">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Privacy Policy</h1>
              <p>
                We are committed to maintaining the privacy and security of your personal information. This Privacy
                Policy describes how we collect, use, and share your data when you use our services.
              </p>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">Information We Collect</h2>
              <p>
                When you sign up for an account, we collect personal information such as your name, email address, and
                phone number. We also collect information about your transactions, such as the amount and recipient of
                your payments.
              </p>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">How We Use Your Information</h2>
              <p>
                We use the information we collect to provide and improve our services. This includes processing your
                transactions, verifying your identity, and preventing fraud. We may also use your information to
                communicate with you, such as sending you transaction receipts or account updates.
              </p>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">Data Security</h2>
              <p>
                We take the security of your data seriously and have implemented measures to protect it from
                unauthorized access, alteration, or disclosure. Your information is encrypted using secure socket layer
                (SSL) technology and stored on secure servers.
              </p>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">Your Rights</h2>
              <p>
                You have the right to access, update, and delete your personal information. You can also opt out of
                receiving marketing communications from us. If you have any questions about your rights or would like to
                exercise them, please contact us using the information provided below.
              </p>
        
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

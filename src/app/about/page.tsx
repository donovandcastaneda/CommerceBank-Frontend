import { CheckIcon } from "lucide-react";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="w-full py-6 space-y-6 md:py-12">
      <div className="container space-y-6 px-4 md:px-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            About Commerce Bank
          </h1>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Welcome to Commerce Bank, your trusted financial partner. We are
            committed to providing you with the best banking experience,
            combining cutting-edge technology with personalized service. Our
            secure and user-friendly mobile app allows you to manage your
            finances anytime, anywhere. At Commerce Bank, we believe in
            transparency, innovation, and putting our customers first.
          </p>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Commerce Bank is on a mission to empower our customers by providing
              them with convenient, secure, and innovative banking solutions. We
              aim to simplify the financial lives of our customers by offering
              digital tools that make banking easy and accessible to all. Our
              commitment to excellence and continuous improvement drives us to
              deliver exceptional service and products that meet the evolving
              needs of our customers.
            </p>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Our Values</h2>
            <div className="grid gap-2 md:grid-cols-2">
              <div className="flex items-start gap-2">
                <CheckIcon className="h-4 w-4 flex-shrink-0" />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <strong>Customer Centricity:</strong>
                  We are dedicated to understanding and meeting the needs of our
                  customers, ensuring that their experience with Commerce Bank is
                  always exceptional.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon className="h-4 w-4 flex-shrink-0" />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <strong>Innovation:</strong>
                  We embrace technology and creativity to introduce new and
                  improved ways of banking, making financial management more
                  convenient and efficient for our customers.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon className="h-4 w-4 flex-shrink-0" />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <strong>Integrity:</strong>
                  Trust is the foundation of our relationship with our
                  customers. We uphold the highest ethical standards, ensuring
                  the security and privacy of their financial information.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon className="h-4 w-4 flex-shrink-0" />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <strong>Community:</strong>
                  We are part of the communities we serve, and we are committed
                  to making a positive impact through financial education,
                  support for local businesses, and philanthropic initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

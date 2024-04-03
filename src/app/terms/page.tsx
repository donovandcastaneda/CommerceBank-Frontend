import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="py-16 w-full">
      <div className="container px-4 md:px-6">
        <div className="mx-auto prose prose-gray max-w-3xl dark:prose-invert md:max-w-4xl">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Terms and Conditions</h1>
            <p>
              Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with
              and be bound by the following terms and conditions of use, which together with our privacy policy govern
              Commerce Bank's relationship with you in relation to this website. If you disagree with any part of
              these terms and conditions, please do not use our website.
            </p>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">Use of the Website</h2>
            <p>
              By accessing the website, you warrant and represent to the website owner that you are legally entitled to
              do so and to make use of information made available via the website.
            </p>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">Trademarks</h2>
            <p>
              The trademarks, names, logos, and service marks (collectively “trademarks”) displayed on this website are
              registered and unregistered trademarks of the website owner. Nothing contained on this website should be
              construed as granting any license or right to use any trademark without the prior written permission of
              the website owner.
            </p>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">External Links</h2>
            <p>
              External links may be provided for your convenience, but they are beyond the control of the website owner
              and no representation is made as to their content. Use or reliance on any external links and the content
              thereon provided is at your own risk.
            </p>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">Warranties</h2>
            <p>
              The website owner makes no warranties, representations, statements or guarantees (whether express,
              implied in law, or residual) regarding the website.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

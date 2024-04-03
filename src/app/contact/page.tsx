import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
export default function Component() {
  return (
    <div className="container py-16">
      <div className="">
        <div className="grid md:grid-cols-2 gap-12 items-start lg:gap-24">
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Contact Us</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Have questions? Send us a message and well get back to you as
                soon as possible.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Enter your last name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Enter the subject" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  className="min-h-[100px]"
                  placeholder="Enter your message"
                />
              </div>
              <Button>Send message</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

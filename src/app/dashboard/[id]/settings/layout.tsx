"use client"

import { Separator } from "@/components/ui/separator";
import { Metadata } from "next"
import Image from "next/image"
import { SidebarNav } from "./component/sidebar-nav";
import { useEffect } from "react";
import { useAuth } from "@/context/authContext";




const sidebarNavItems = [
  {
    title: "Profile",
    href:  `/dashboard/1/settings`, 

  },
  {
    title: "Appearance",
    href:  `/dashboard/1/settings/appearence`, 
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {

  const { user, token, fetchUserDetails} = useAuth();

  useEffect(() => {
    if (token && user?.id) {
      fetchUserDetails(user.id, token);
    }
  }, [user?.id, token, fetchUserDetails]);

 
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/forms-light.png"
          width={1280}
          height={791}
          alt="Forms"
          className="block dark:hidden"
        />
        <Image
          src="/examples/forms-dark.png"
          width={1280}
          height={791}
          alt="Forms"
          className="hidden dark:block"
        />
      </div>
      <div className="container min-h-screen hidden space-y-6 py-32 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  )
}
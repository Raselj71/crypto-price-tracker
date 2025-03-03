"use client";

import * as React from "react";
import Logo from "@/public/Logo.png";

import { NavMain } from "@/components/NavMain";
import { NavUser } from "@/components/NavUser";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavMenus } from "@/constant/nav";
import Image from "next/image";
import Link from "next/link";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="bg-white " collapsible="icon" {...props}>
      <SidebarHeader className="py-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Link href="/" className="flex items-center">
                <Image src={Logo} alt="Verdicto" width={60} height={60} />
                <span className="text-xl font-bold ml-2">
                  Crypto Price Tracker
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="mt-2.5">
        <NavMain items={NavMenus} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

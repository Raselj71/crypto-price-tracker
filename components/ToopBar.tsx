import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { Separator } from "@radix-ui/react-separator";
import SearchBar from "./SearchBar";

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { EllipsisVertical } from "lucide-react";
import RefreshBtn from "./RefreshBtn";

function ToopBar() {
  return (
    <div className="w-full border-b flex items-center justify-between gap-2 px-4 py-2 sticky top-0 bg-background z-10">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <SearchBar />
      </div>

      <div className="flex items-center gap-4">
        <RefreshBtn />

        <div className="hidden lg:flex items-center bg-[#F2F8FF] py-1 px-2 rounded-md gap-4">
          <Avatar className="rounded-full size-8">
            <AvatarImage
              className="rounded-full"
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>RA</AvatarFallback>
          </Avatar>
          <div className="-space-y-1">
            <h2 className="font-bold ">Rasel Ahmed</h2>
            <p className="text-sm text-gray-400">rasel@gmail.com</p>
          </div>

          <EllipsisVertical className="text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default ToopBar;

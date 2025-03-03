"use client";
import React from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
import { useDataContext } from "@/app/ContexProvder";

function SearchBar() {
  const { setSearch } = useDataContext();
  return (
    <div className="relative w-[300px]">
      {" "}
      {/* Adjust width as needed */}
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
        size={18}
      />
      <Input
        type="text"
        placeholder="Search..."
        className="pl-10 w-full"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;

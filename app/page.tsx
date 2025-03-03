"use client";
import { useFetch } from "@/hooks/DataFetchingHook";
import Image from "next/image";
import { useContext } from "react";
import { useDataContext } from "./ContexProvder";
import Coindashbord from "@/components/Coindashbord";

export default function Home() {
  const { filterData, isLoading, refetch } = useDataContext();
  console.log(filterData);

  return (
    <div className="bg-[#F2F8FF] w-full h-full">
      <Coindashbord />
    </div>
  );
}

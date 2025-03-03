"use client";
import React from "react";
import { Button } from "./ui/button";
import { RefreshCcw } from "lucide-react";
import { useDataContext } from "@/app/ContexProvder";

function RefreshBtn() {
  const { refetch } = useDataContext();
  return (
    <Button
      onClick={() => {
        refetch();
      }}
    >
      <RefreshCcw />
      Refresh
    </Button>
  );
}

export default RefreshBtn;

"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ContexProvder from "./ContexProvder";

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ContexProvder>{children}</ContexProvder>
    </QueryClientProvider>
  );
}

export default Provider;

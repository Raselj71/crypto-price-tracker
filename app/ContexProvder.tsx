"use client";

import { useFetch } from "@/hooks/DataFetchingHook";
import React, { createContext, useContext, useState } from "react";

const DataContext = createContext<{
  searchQuery: string;
  setSearch: (query: string) => void;
  filterData: any[] | undefined;
  isLoading: boolean;
  refetch: () => void;
  error: Error | null;
  isFetching: boolean;
} | null>(null);

function ContexProvder({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [searchQuery, setSearch] = useState("");

  const { data, isLoading, isFetching, refetch, error } = useFetch();
  const filterData =
    searchQuery === ""
      ? data
      : data?.filter((item: any) => {
          return item.name.toLowerCase().includes(searchQuery.toLowerCase());
        });

  return (
    <DataContext.Provider
      value={{
        searchQuery,
        isFetching,
        setSearch,
        isLoading,
        refetch,
        error,
        filterData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default ContexProvder;

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("There is no context Provider");
  }
  return context;
};

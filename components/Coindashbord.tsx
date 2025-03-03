import { useDataContext } from "@/app/ContexProvder";
import React from "react";
import {
  Card,
  CardContent,
  
  
  CardHeader,
 
} from "./ui/card";
import Coincard from "./Coincard";
import { Skeleton } from "./ui/skeleton";

function Coindashbord() {
  const { filterData, isFetching, isLoading, error } = useDataContext();
  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center text-red-600 text-xl">
        {error.message}
      </div>
    );
  }

  return (
    <div className="flex px-8 md:px-4 py-4 gap-4 flex-wrap">
      {isLoading || isFetching
        ? Array.from({ length: 5 }).map((_, index) => (
            <Card className="w-full md:w-[300px] h-40" key={index}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Skeleton className="size-8 rounded-full" />

                  <div className="flex flex-col gap-2">
                    <Skeleton className="w-[200px] h-6 " />
                    <Skeleton className="w-[200px] h-6 " />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Skeleton className="w-[200px] h-6 " />
              </CardContent>
            </Card>
          ))
        : filterData?.map((item) => (
            <Coincard
              key={item.id}
              coin_market_cap={item.market_cap}
              symbol={item.symbol}
              price={item.current_price}
              title={item.name}
              image={item.image}
              percentage={item.price_change_percentage_24h}
            />
          ))}
    </div>
  );
}

export default Coindashbord;

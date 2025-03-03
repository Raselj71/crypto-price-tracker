import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

function Coincard({
  title,
  price,
  image,
  symbol,
  coin_market_cap,
  percentage,
}: {
  title: string;
  price: string;
  image: string;
  symbol: string;
  coin_market_cap: string;
  percentage: string;
}) {
  return (
    <Card className="w-full md:w-[300px]">
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage className="size-8" src={image} />
            <AvatarFallback>{symbol}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{symbol}</CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-2xl font-semibold">$ {price}</p>
        <div className="flex justify-between items-center">
          <p className="text-gray-500 font-semibold mt-2">PNL Daily</p>
          <p
            className={`${
              Number(percentage) > 0
                ? "bg-green-200 text-green-600 "
                : "bg-red-200 text-red-600"
            } rounded-full px-2 py-1`}
          >
            <span>{percentage}%</span>
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-base text-gray-400">Market Cap: {coin_market_cap}</p>
      </CardFooter>
    </Card>
  );
}

export default Coincard;

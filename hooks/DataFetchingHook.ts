import { target_url } from "@/constant/apikey";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const fetchData = async () => {
  try {
    const response = await axios.get(target_url, {
      headers: {
        Accept: "application/json",
        "x-cg-demo-api-key": process.env.CRYPTO_API!,
      },
    });

    return await response.data;
  } catch (error: any) {
    console.log(error);

    throw new Error(error.message);
  }
};

export const useFetch = () => {
  return useQuery({
    queryKey: ["data"],
    queryFn: fetchData,
  });
};

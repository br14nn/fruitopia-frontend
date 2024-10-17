"use server";

import axios from "axios";
import { apiURL } from "@/utils/utils";

export default async function findAllProducts(
  keyword?: string,
  category?: "WINTER" | "SUMMER" | "SPRING" | "FALL" | "",
  orderPriceBy?: "asc" | "desc" | "",
) {
  try {
    const { data } = await axios.get(
      `${apiURL}/products?${keyword && `keyword=${keyword}&`}${category && `category=${category}&`}${orderPriceBy && `order-price-by=${orderPriceBy}&`}`,
    );

    return data;
  } catch (error: any) {
    console.error(error.response?.data);
    return { message: null, error: error.response?.data?.message };
  }
}

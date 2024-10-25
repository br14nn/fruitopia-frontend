"use server";

import { backendURL } from "@/utils/utils";
import axios from "axios";

export default async function findAllProducts(
  keyword?: string,
  category?: "WINTER" | "SUMMER" | "SPRING" | "FALL" | "",
  orderPriceBy?: "asc" | "desc" | "",
) {
  try {
    const { data } = await axios.get(
      `${backendURL}/products?${keyword && `keyword=${keyword}&`}${category && `category=${category}&`}${orderPriceBy && `order-price-by=${orderPriceBy}&`}`,
    );

    return data;
  } catch (error: any) {
    if (error.message) return { message: [], error: error.message };
    return { message: [], error: error.response?.data?.message };
  }
}

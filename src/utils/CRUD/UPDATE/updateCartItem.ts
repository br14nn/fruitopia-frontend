"use server";

import { backendURL } from "@/utils/utils";
import axios from "axios";
import { revalidatePath } from "next/cache";

export default async function updateCartItem(
  id: number,
  quantity?: "increment" | "decrement",
) {
  try {
    const { data } = await axios.patch(`${backendURL}/cart`, {
      id: id,
      quantity: quantity,
    });

    revalidatePath("/cart");

    return data;
  } catch (error: any) {
    console.error(error.response?.data);
    return { message: null, error: error.response?.data?.message };
  }
}

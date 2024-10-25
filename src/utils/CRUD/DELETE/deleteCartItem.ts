"use server";

import { backendURL } from "@/utils/utils";
import axios from "axios";
import { revalidatePath } from "next/cache";

export default async function deleteCartItem(cartID: number) {
  try {
    const { data } = await axios.delete(`${backendURL}/cart`, {
      data: {
        id: cartID,
      },
    });

    revalidatePath("/cart");

    return data;
  } catch (error: any) {
    console.error(error.response?.data);
    return { message: null, error: error.response?.data?.message };
  }
}

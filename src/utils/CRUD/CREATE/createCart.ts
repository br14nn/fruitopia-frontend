"use server";

import axios from "axios";
import { apiURL } from "@/utils/utils";
import { revalidatePath } from "next/cache";

export default async function (createCart: ICreateCart) {
  revalidatePath("/cart");
  try {
    const { data } = await axios.post(`${apiURL}/cart`, createCart);
  } catch (error: any) {
    console.error(error.response.data.message);
  }
}

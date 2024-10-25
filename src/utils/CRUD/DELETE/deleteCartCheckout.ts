"use server";

import axios from "axios";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { backendURL } from "@/utils/utils";

export default async function deleteCartCheckout() {
  try {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    revalidatePath("/cart");

    const { data } = await axios.delete(
      `${backendURL}/cart/checkout/${user?.id}`,
    );

    return data;
  } catch (error: any) {
    return { message: null, error: error?.response?.data?.message };
  }
}

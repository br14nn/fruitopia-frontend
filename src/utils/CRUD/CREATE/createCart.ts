"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";
import { backendURL } from "@/utils/utils";

export default async function (productID: number) {
  try {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    await axios.post(`${backendURL}/cart`, {
      userID: user?.id,
      productID,
    });

    revalidatePath("/cart");
  } catch (error: any) {
    console.error(error.response?.data);
  }
}

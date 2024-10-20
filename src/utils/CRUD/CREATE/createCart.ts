"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";
import { apiURL } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";

export default async function (productID: number) {
  try {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    await axios.post(`${apiURL}/cart`, { userID: user?.id, productID });

    revalidatePath("/cart");
  } catch (error: any) {
    console.error(error.response?.data);
  }
}

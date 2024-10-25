"use server";

import axios from "axios";
import { createClient } from "@/utils/supabase/server";
import { backendURL } from "@/utils/utils";

export default async function findUserCart() {
  try {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data } = await axios.get(`${backendURL}/cart?userID=${user?.id}`);

    return data;
  } catch (error: any) {
    console.error(error.response?.data);
    return { message: null, error: error.response?.data?.message };
  }
}

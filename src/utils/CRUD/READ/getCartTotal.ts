"use server";

import axios from "axios";
import { apiURL } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";

export default async function getCartTotal(): Promise<{
  message: any;
  error: any;
}> {
  try {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data } = await axios.get(`${apiURL}/cart/total/${user?.id}`);

    return data;
  } catch (error: any) {
    console.error(error?.response?.data);
    return { message: null, error: error?.response?.data?.message };
  }
}

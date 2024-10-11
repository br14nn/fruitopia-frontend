"use server";

import axios from "axios";
import { apiURL } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";

export default async function findUserCart() {
  try {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data } = await axios.get(`${apiURL}/cart?userID=${user?.id}`);

    return data;
  } catch (error: any) {
    console.error(error.response.data.message);
  }
}

"use server";

import axios from "axios";
import { apiURL } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";

export default async function () {
  try {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    await axios.post(`${apiURL}/users`, {
      id: user?.id,
      email: user?.email,
      name: user?.user_metadata.name,
      picture: user?.user_metadata.picture,
    });
  } catch (error: any) {
    console.error(error.response?.data);
  }
}

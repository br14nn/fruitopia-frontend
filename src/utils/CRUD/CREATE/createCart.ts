"use server";

import axios from "axios";
import { apiURL } from "@/utils/utils";

export default async function (createCart: ICreateCart) {
  try {
    const { data } = await axios.post(`${apiURL}/cart`, createCart);
    console.log(data);
  } catch (error: any) {
    console.error(error.response.data.message);
  }
}

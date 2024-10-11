"use server";

import axios from "axios";
import { apiURL } from "@/utils/utils";

export default async function (createUser: ICreateUser) {
  try {
    await axios.post(`${apiURL}/users`, createUser);
  } catch (error: any) {
    console.error(error.response?.data);
  }
}

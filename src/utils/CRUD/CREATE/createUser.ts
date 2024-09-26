"use server";

import axios from "axios";

export default async function (createUser: ICreateUser) {
  try {
    await axios.post("http://127.0.0.1:3333/api/users", createUser);
  } catch (error: any) {
    console.log(error.response.data.message);
  }
}

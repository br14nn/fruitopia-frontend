"use server";

import { revalidatePath } from "next/cache";

export default async function revalidateAllData() {
  return revalidatePath("/", "layout");
}

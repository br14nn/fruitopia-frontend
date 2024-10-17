"use server";

import { revalidatePath } from "next/cache";

export default async function (path: string) {
  revalidatePath(path);
}

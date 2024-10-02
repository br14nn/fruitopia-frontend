import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const apiURL = "http://127.0.0.1:3333/api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { twMerge } from "tailwind-merge";
import { clsx, ClassValue, ClassArray } from "clsx";

export default function cn(...inputs: ClassArray) {
  return twMerge(clsx(...inputs));
}

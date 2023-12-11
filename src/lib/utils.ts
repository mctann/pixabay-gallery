import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
      const millionValue = num / 1000000;
      return `${millionValue.toFixed(3)}M`;
  } else if (num >= 1000) {
      const thousandValue = num / 1000;
      return `${thousandValue.toFixed(0)}K`;
  } else {
      return num.toString();
  }
}
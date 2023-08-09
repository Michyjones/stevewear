import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "KES",
});

// export const formatMoney = (price: number = 0): string => {
//   const options: Intl.NumberFormatOptions = {
//     style: 'currency',
//     currency: 'KES',
//     minimumFractionDigits: 2,
//   };
//   if (price % 100 === 0) {
//     options.minimumFractionDigits = 0;
//   }
//   const formatter = new Intl.NumberFormat('en-KE', options);
//   return formatter.format(price);
// };

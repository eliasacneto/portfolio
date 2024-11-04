import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cellphoneMask(value: string) {
  return value
    .replace(/\D/g, "")
    .replace(/^(\d)/, "($1")
    .replace(/^(\(\d{2})(\d)/, "$1) $2")
    .replace(/(\d{5})(\d{1,4})/, "$1-$2")
    .replace(/(-\d{4})\d+?$/, "$1");
}

// export function cellphoneMask(value: string, countryCode: string): string {
//   const cleanValue = value.replace(/\D/g, "");
//   switch (countryCode) {
//     case "55": // Brasil
//       return cleanValue.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
//     case "1": // Estados Unidos
//       return cleanValue.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
//     case "44": // Reino Unido
//       return cleanValue.replace(/(\d{4})(\d{6})/, "$1 $2");
//     case "49": // Alemanha
//       return cleanValue.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
//     // Adicione mais casos conforme necessário
//     default:
//       return cleanValue;
//   }
// }

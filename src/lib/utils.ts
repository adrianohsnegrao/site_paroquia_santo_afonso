/** Une classes condicionais ignorando valores falsy (versão enxuta de clsx). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

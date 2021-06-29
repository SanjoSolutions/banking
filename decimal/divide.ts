import { Decimal } from "./decimal.js";

export function divide(a: Decimal, b: Decimal): Decimal {
  return new Decimal(String(a.toNumber() / b.integralPart));
}

import { Decimal } from "./decimal.js";
import { numberOfDigits } from "./numberOfDigits.js";

export function add(a: Decimal, b: Decimal): Decimal {
  let fractionalPartA = a.fractionalPart;
  let fractionalPartB = b.fractionalPart;
  const numberOfDigitsOfFractionalPartOfA = numberOfDigits(fractionalPartA);
  const numberOfDigitsOfFractionalPartOfB = numberOfDigits(fractionalPartB);
  const numberOfDigitsOfFractionalPart = Math.max(
    numberOfDigitsOfFractionalPartOfA,
    numberOfDigitsOfFractionalPartOfB,
  );
  if (numberOfDigitsOfFractionalPartOfA < numberOfDigitsOfFractionalPart) {
    fractionalPartA *=
      10 ** (numberOfDigitsOfFractionalPart - numberOfDigitsOfFractionalPartOfA);
  }
  if (numberOfDigitsOfFractionalPartOfB < numberOfDigitsOfFractionalPart) {
    fractionalPartB *=
      10 ** (numberOfDigitsOfFractionalPart - numberOfDigitsOfFractionalPartOfB);
  }
  let fractionalPart = fractionalPartA + fractionalPartB;

  let integralPart = a.integralPart + b.integralPart;

  if (numberOfDigits(fractionalPart) > numberOfDigitsOfFractionalPart) {
    const d = Math.floor(fractionalPart / (10 ** numberOfDigitsOfFractionalPart));
    integralPart += d;
    fractionalPart -= d * 10 ** numberOfDigitsOfFractionalPart;
  }

  const sum = new Decimal("0");
  sum.integralPart = integralPart;
  sum.fractionalPart = fractionalPart;

  return sum;
}

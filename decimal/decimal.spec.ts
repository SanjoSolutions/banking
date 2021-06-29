import { add } from "./add.js";
import { Decimal } from "./decimal.js";
import { divide } from "./divide.js";

describe("decimal", () => {
  test("construction", () => {
    const decimal = new Decimal('12.34')
    expect(decimal.integralPart).toEqual(12)
    expect(decimal.fractionalPart).toEqual(34)
  });

  test("integer to decimal", () => {
    const decimal = new Decimal('12')
    expect(decimal.integralPart).toEqual(12)
    expect(decimal.fractionalPart).toEqual(0)
  });
});

describe("add", () => {
  test("add 0", () => {
    expect(
      add(
        new Decimal('12.34'),
        new Decimal('13.54')
      )
    ).toEqual(new Decimal('25.88'))
  });

  test("add 1", () => {
    expect(
      add(
        new Decimal('12.341'),
        new Decimal('13.54')
      )
    ).toEqual(new Decimal('25.881'))
  });

  test("add 2", () => {
    expect(
      add(
        new Decimal('12.34'),
        new Decimal('13.541')
      )
    ).toEqual(new Decimal('25.881'))
  });

  test("Übertrag", () => {
    expect(
      add(
        new Decimal('0.5'),
        new Decimal('0.6')
      )
    ).toEqual(new Decimal('1.1'))
  });
});

describe("divide", () => {
  test("divide 1", () => {
    expect(
      divide(
        new Decimal('2'),
        new Decimal('1')
      )
    ).toEqual(new Decimal('2'))
  });

  test("divide 2", () => {
    expect(
      divide(
        new Decimal('3'),
        new Decimal('2')
      )
    ).toEqual(new Decimal('1.5'))
  });

  test("divide 3", () => {
    expect(
      divide(
        new Decimal('4.5'),
        new Decimal('2')
      )
    ).toEqual(new Decimal('2.25'))
  });
});

describe("multiple", () => {

});

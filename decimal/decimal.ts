export class Decimal {
  private static REG_EXP = /^(\d+)(?:\.(\d+))?$/

  public integralPart: number
  public fractionalPart: number

  constructor(decimal: string) {
    this._parse(decimal)
  }

  public toNumber() {
    return Number(`${this.integralPart}.${this.fractionalPart}`)
  }

  private _parse(decimal: string) {
    const match = Decimal.REG_EXP.exec(decimal)
    if (match) {
      this.integralPart = Number(match[1])
      this.fractionalPart = match[2] ? Number(match[2]) : 0
    }
  }
}


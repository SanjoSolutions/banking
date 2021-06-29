import { Bank } from "./Bank.js";
import { verifyDepositionAmount } from "./verifyDepositionAmount.js";

export class Account {
  private _bank: Bank;
  private _balance: number;

  constructor(bank: Bank) {
    this._bank = bank;
    this._balance = 0;
  }

  get bank() {
    return this._bank;
  }

  get balance() {
    return this._balance;
  }

  set balance(balance) {
    this._balance = balance
  }

  depositMoney(amount: number) {
    verifyDepositionAmount(amount);

    this._balance += amount;
  }

  transferMoney(amount: number, to: Account) {
    this._bank.requestMoneyTransfer({
      from: this,
      to,
      amount
    })
  }
}

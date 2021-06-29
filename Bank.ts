import { Account } from "./Account.js";
import type { MoneyTransferRequest } from "./MoneyTransferRequest.js";
import { verifyMoneyTransferRequest } from "./VerifyMoneyTransferRequest.js";

export class Bank {
  openAccount() {
    const account = new Account(this);
    return account;
  }

  requestMoneyTransfer(moneyTransferRequest: MoneyTransferRequest) {
    verifyMoneyTransferRequest(moneyTransferRequest);
    this._carryOutMoneyTransferRequest(moneyTransferRequest);
  }

  public _carryOutMoneyTransferRequest(moneyTransferRequest: MoneyTransferRequest) {
    moneyTransferRequest.from.balance -= moneyTransferRequest.amount;
    moneyTransferRequest.to.balance += moneyTransferRequest.amount;
  }
}

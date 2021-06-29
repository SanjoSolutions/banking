import { Account } from "./Account.js";

export interface MoneyTransferRequest {
  from: Account
  to: Account
  amount: number
}

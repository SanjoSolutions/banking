// class Transaction {
//   sender: Account
//   receiver: Account
//   amount: Number
// }

import { Bank } from "./Bank.js";

const theBank = new Bank()
const aAccount = theBank.openAccount()
const anotherAccount = theBank.openAccount()
const depositReceipt = aAccount.depositMoney(100)
const transferReceipt = aAccount.transferMoney(100, anotherAccount)

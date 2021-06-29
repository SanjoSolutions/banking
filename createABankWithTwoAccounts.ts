import { Bank } from "./Bank.js";

export function createABankWithTwoAccounts() {
  const bank = new Bank();
  const accounts = [
    bank.openAccount(),
    bank.openAccount(),
  ];
  return { bank, accounts };
}

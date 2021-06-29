import Mock = jest.Mock;

jest.mock('./verifyDepositionAmount.js')

import { Bank } from "./Bank.js";
import { createABankWithTwoAccounts } from "./createABankWithTwoAccounts.js";
import { verifyDepositionAmount } from "./verifyDepositionAmount.js";

describe("Account", () => {
  describe("depositMoney", () => {
    it("verifies the deposition amount", () => {
      const bank = new Bank()
      const account = bank.openAccount()
      const amount = 100
      account.depositMoney(amount)

      expect(verifyDepositionAmount).toHaveBeenCalledWith(amount)
    });
  });

  describe("transferMoney", () => {
    it("requests a money transfer from the bank", () => {
      const {bank, accounts} = createABankWithTwoAccounts()
      jest.spyOn(bank, 'requestMoneyTransfer').mockReturnValue()
      const amount = 100;
      accounts[0].transferMoney(amount, accounts[1])
      expect(bank.requestMoneyTransfer).toHaveBeenCalledWith({
        from: accounts[0],
        to: accounts[1],
        amount
      })
      const call = (bank.requestMoneyTransfer as Mock).mock.calls[0]
      const firstArgument = call[0]
      expect(firstArgument.from).toBe(accounts[0])
      expect(firstArgument.to).toBe(accounts[1])
    });
  });
});

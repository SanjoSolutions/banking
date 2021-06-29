import Mock = jest.Mock;

jest.mock("./verifyMoneyTransferRequest.js");

import { Bank } from "./Bank.js";
import { createABankWithTwoAccounts } from "./createABankWithTwoAccounts.js";
import {
  verifyMoneyTransferRequest,
} from "./VerifyMoneyTransferRequest.js";

describe("Bank", () => {
  describe("requestMoneyTransfer", () => {
    it("requests a money transfer", () => {
      const { bank, accounts } = createABankWithTwoAccounts();
      const amount = 100;
      accounts[0].depositMoney(amount);
      bank.requestMoneyTransfer({
        from: accounts[0],
        to: accounts[1],
        amount,
      });
      expect(accounts[0].balance).toEqual(0);
      expect(accounts[1].balance).toEqual(100);
    });

    it("verifies the money transfer request before carrying it out", () => {
      const { bank, accounts } = createABankWithTwoAccounts();

      jest.spyOn(bank, "_carryOutMoneyTransferRequest").mockReturnValue();

      const amount = 100;
      const moneyTransferRequest = {
        from: accounts[0],
        to: accounts[1],
        amount,
      };
      bank.requestMoneyTransfer(moneyTransferRequest);

      expect(verifyMoneyTransferRequest).toHaveBeenCalledWith(moneyTransferRequest);
      expect(bank._carryOutMoneyTransferRequest)
        .toHaveBeenCalledWith(moneyTransferRequest);
      expect(verifyMoneyTransferRequest)
        .toHaveBeenCalledBefore(bank._carryOutMoneyTransferRequest as Mock);
    });
  });
});

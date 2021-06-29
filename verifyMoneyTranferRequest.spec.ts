import { createABankWithTwoAccounts } from "./createABankWithTwoAccounts.js";
import {
  ERROR_MESSAGE_FROM_BALANCE_BELOW_AMOUNT,
  verifyMoneyTransferRequest,
} from "./VerifyMoneyTransferRequest.js";

describe("verifyMoneyTransferRequest", () => {
  describe("when the from account has a balance < amount", () => {
    it("throws an error", () => {
      const { accounts } = createABankWithTwoAccounts();
      const moneyTransferRequest = {
        from: accounts[0],
        to: accounts[1],
        amount: 100,
      };
      expect(() => verifyMoneyTransferRequest(moneyTransferRequest))
        .toThrow(ERROR_MESSAGE_FROM_BALANCE_BELOW_AMOUNT);
    });
  });
});

import { MoneyTransferRequest } from "./MoneyTransferRequest.js";

export const ERROR_MESSAGE_FROM_BALANCE_BELOW_AMOUNT = "from.balance < amount";

export function verifyMoneyTransferRequest(moneyTransferRequest: MoneyTransferRequest): void {
  if (moneyTransferRequest.from.balance < moneyTransferRequest.amount) {
    throw new Error(ERROR_MESSAGE_FROM_BALANCE_BELOW_AMOUNT);
  }
}

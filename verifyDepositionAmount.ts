export const ERROR_MESSAGE_ONLY_AMOUNTS_ABOVE_0_CAN_BE_DEPOSITED = "Only amounts > 0 can be deposited.";

export function verifyDepositionAmount(amount: number) {
  if (amount <= 0) {
    throw new Error(ERROR_MESSAGE_ONLY_AMOUNTS_ABOVE_0_CAN_BE_DEPOSITED);
  }
}

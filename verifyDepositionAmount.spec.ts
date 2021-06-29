import {
  ERROR_MESSAGE_ONLY_AMOUNTS_ABOVE_0_CAN_BE_DEPOSITED,
  verifyDepositionAmount,
} from "./verifyDepositionAmount.js";

describe("verifyDepositionAmount", () => {
  describe("only amounts > 0 can be deposited", () => {
    test("a deposition with an amount > 0 is successful", () => {
      expect(() => verifyDepositionAmount(100)).not.toThrow();
    });

    test("a deposition with an amount of 0 fails", () => {
      expect(() => verifyDepositionAmount(0))
        .toThrow(ERROR_MESSAGE_ONLY_AMOUNTS_ABOVE_0_CAN_BE_DEPOSITED);
    });

    test("a deposition with an amount below 0 fails", () => {
      expect(() => verifyDepositionAmount(-100))
        .toThrow(ERROR_MESSAGE_ONLY_AMOUNTS_ABOVE_0_CAN_BE_DEPOSITED);
    });
  });
});

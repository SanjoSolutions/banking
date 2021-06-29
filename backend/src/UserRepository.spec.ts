import { User } from "./User.js";
import { UserRepository } from "./UserRepository.js";

describe("UserRepository", () => {
  describe("findUser", () => {
    test("finding a user by username", () => {
      const userRepository = new UserRepository()
      const user1 = new User('username1', 'password')
      const user2 = new User('username2', 'password')
      userRepository.insert(user1)
      userRepository.insert(user2)
      const foundUser = userRepository.findUser(user1.username)
      expect(foundUser).toEqual(user1)
    });
  });
});

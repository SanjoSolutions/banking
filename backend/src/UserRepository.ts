import { User } from "./User.js";

export class UserRepository {
  private _users: Map<string, User>;

  constructor() {
    this._users = new Map();
  }

  insert(user: User): void {
    this._users.set(user.username, user);
  }

  findUser(username: string): User {
    return this._users.get(username)!;
  }
}

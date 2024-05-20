import { faker } from "@faker-js/faker";

export const db = {
  addUser: (user: User) => {
    if (users.some((candidate) => candidate.username === user.username))
      return Promise.resolve(false);

    users.push(user);

    return Promise.resolve(true);
  },
  editUser: (
    username: string,
    update: Partial<Omit<User, "admin" | "username">>
  ) => {
    const user = users.find((candidate) => candidate.username === username);

    if (user) {
      Object.assign(user, update);

      return Promise.resolve(true);
    }

    return Promise.resolve(false);
  },
  deleteUser: (username: string) => {
    const index = users.findIndex(
      (candidate) => candidate.username === username
    );

    if (index === -1) return Promise.resolve(0);

    users.splice(index, 1);

    return Promise.resolve(1);
  },
  getUser: (username: string) =>
    Promise.resolve(users.find((candidate) => candidate.username === username)),
  getUsers: () => Promise.resolve(users),
};

export interface User {
  readonly username: string;
  readonly password: string;
  readonly admin: boolean;
  readonly firstName: string;
  readonly lastName: string;
}

const users: User[] = [
  {
    username: "admin",
    password: "admin",
    admin: true,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  },
  {
    username: "john",
    password: "john123",
    admin: false,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  },
  {
    username: "bob",
    password: "bob123",
    admin: false,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  },
];

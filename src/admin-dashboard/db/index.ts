import { faker } from "@faker-js/faker";

export const db = {
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
    username: "bob",
    password: "bob123",
    admin: false,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
  },
];

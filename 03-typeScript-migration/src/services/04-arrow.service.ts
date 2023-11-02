interface User {
  id: number;
  name: string;
}

const users: User[] = [
  {
    id: 1,
    name: "Fernando",
  },
  {
    id: 2,
    name: "Linda",
  },
  {
    id: 3,
    name: "Karen",
  },
];

export const getUserById = (
  id: number,
  callback: (err?: string, user?: User) => void
) => {
  const user = users.find((user) => user.id === id);
  user ? callback(undefined, user) : callback(`User with id ${id} not found`);
};

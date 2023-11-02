const users = [
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

export const getUserById = (id, callback) => {
  const user = users.find((user) => user.id === id);
  user ? callback(null, user) : callback(`User with id ${id} not found`);
};

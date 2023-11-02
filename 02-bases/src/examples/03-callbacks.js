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

export function getUser(id, callback) {
  const user = users.find(function (user) {
    return user.id === id;
  });

  if (user) {
    return callback(null, user);
  }

  callback(`User with id ${id} not found`);
}

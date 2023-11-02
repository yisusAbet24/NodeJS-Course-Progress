//Factory Functions
//they are functions that return an object
import { getAge, getUUID } from "../plugins/index.js";

export const buildUser = ({ name, lastName, birthDate }) => {
  return {
    id: getUUID(),
    name,
    lastName,
    birthDate,
    age: getAge(birthDate),
  };
};
const obj = {
  name: "Jesus",
  lastName: "Alberto",
  birthDate: "2003-11-14",
};

console.log(buildUser(obj));

//Factory Functions
//they are functions that return an object

export const buildMakePerson = ({ getAge, getUUID }) => {
  return ({ firstName, lastName, birthDate }) => {
    return {
      id: getUUID(),
      firstName,
      lastName,
      birthDate,
      age: getAge(birthDate),
    };
  };
};

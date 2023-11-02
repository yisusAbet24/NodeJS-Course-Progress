//Factory Functions
//they are functions that return an object

interface PersonOptions {
  firstName: string;
  lastName: string;
  birthDate: Date;
}

interface BuildMakerPersonOptions {
  getAge: (birthDate: Date) => string;
  getUUID: () => string;
}

export const buildMakePerson = ({
  getAge,
  getUUID,
}: BuildMakerPersonOptions) => {
  return ({ firstName, lastName, birthDate }: PersonOptions) => {
    return {
      id: getUUID(),
      firstName,
      lastName,
      birthDate,
      age: getAge(birthDate),
    };
  };
};

export const getAge = (birthDate: string) => {
  if (!birthDate) return new Error("Birth date is required");
  return new Date().getFullYear() - new Date(birthDate).getFullYear();
};

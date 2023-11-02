import { heroes } from "../data/heroes";

export const findHeroe = (id: number) => {
  return heroes.find((heroe) => heroe.id === id);
};

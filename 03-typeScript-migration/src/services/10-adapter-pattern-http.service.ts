import { http } from "../plugins";

export const getPokemonFecth = async (id: number) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemon = await http.get(url);
  return pokemon.name;
};

export const getPokemonAxios = async (id: number) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemon = await http.get(url);
  return pokemon.name;
};

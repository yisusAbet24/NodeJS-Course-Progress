export const getPokemonNameById = async (
  id: string | number
): Promise<string> => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!response.ok) {
      return `error`;
    }
    const pokemon = await response.json();
    return pokemon.name;
  } catch (error) {
    return `No se pudo encontrar un Pokémon con el ID ${id}`;
  }
};

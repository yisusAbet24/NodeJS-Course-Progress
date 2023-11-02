export const getPokemonById = (id, callback) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  return fetch(url).then((response) => {
    response.json().then((data) => {
      data.name
        ? callback(null, data.name)
        : callback("No se encontro el pokemon");
    });
  });
};

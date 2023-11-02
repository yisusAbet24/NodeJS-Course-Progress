/* 
! 01
import { emailTemplate } from "./examples/email.template.js";
import {} from "./examples/destructuring.js";

! 02
const email = emailTemplate("John", "Doe", 1234);
console.log(email);
 
! 03
import { getUser } from "./examples/callbacks.js";
const id = 2;
const id2 = 3;

getUser(id, (err, user) => {
  if (err) {
    throw new Error(err);
  }
  getUser(id2, (err, user2) => {
    if (err) {
      throw new Error(err);
    }
    console.log({
      user,
      user2,
    });
  });
}); 

! 04
import { getUserById } from "./examples/arrow.js";

const id = 2;
getUserById(id, (err, user) => {
  if (err) throw new Error(err);
  console.log(user);
});
 

! 05
import { buildUser } from "./examples/factory.js";

! 06
import { getAge, getUUID } from "./plugins/index.js";
import { buildMakePerson } from "./examples/06-Factory-functions.js";

// ! inyeccion de dependencias
const makeUser = buildMakePerson({ getAge, getUUID });

const yisus = makeUser({
  firstName: "Jesus",
  lastName: "Guzman",
  birthDate: "2003-11-14",
});
console.log(yisus);

! 07
import { getPokemonById } from "./examples/07-promises.js";

getPokemonById(2, (err, pokemon) => {
  pokemon ? console.log(pokemon) : console.log(err);
});


! 08
import { getPokemonById } from "./examples/08-chain-promises.js";


const info = getPokemonById(2);
setTimeout(() => {
  console.log(info);
}, 2000);
console.log(info);


getPokemonById(3)
  .then((pokemon) => console.log(pokemon))
  .catch((err) => console.log(err))
  .finally(() => console.log("Finalizado"));


! 09

import { getPokemonById } from "./examples/09-async-await.js";

const getPokemon = async (id) => {
  try {
    const pokemon = await getPokemonById(id);
    console.log(pokemon.name);
  } catch (error) {
    console.log(error);
  }
};

getPokemon(1);


! 10
import {
  getPokemonFecth,
  getPokemonAxios,
} from "./examples/10-adapter-pattern-http.js";
(async () => {
  const id = 1;
  try {
    const pokemon = await getPokemonAxios(id ?? 1);
    console.log(pokemon);
  } catch (error) {
    console.log(error);
  }
})();

*/

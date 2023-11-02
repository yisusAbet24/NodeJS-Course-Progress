import { findHeroe } from "./services/hero.service";

const hero = findHeroe(10);
console.log(hero?.name ?? "no hero found");

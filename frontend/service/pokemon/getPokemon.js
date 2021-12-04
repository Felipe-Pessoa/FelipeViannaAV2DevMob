/*Nome: Felipe Augusto Pessôa Vianna
  Matrícula: 0050017091
*/

import { PokeService } from "./axios";

export default async function getPokemon() {
  const random = Math.ceil(Math.random() * (890 - 1 + 1));
  const api = new PokeService();
  const pokemon = await api.getPokemon(random);
  return {
    name: pokemon.name,
    image: pokemon.sprites.other["official-artwork"].front_default,
  };
}
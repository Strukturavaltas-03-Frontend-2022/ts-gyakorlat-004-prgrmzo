// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */

export const humans: HumanHero[] = [
  { id: 1, name: "Thor", sex: "male", age: 35, health: 100 },
  { id: 2, name: "Loki", sex: "male", age: 32, health: 105 },
  { id: 3, name: "Odin", sex: "male", age: 72, health: 300 },
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */

export const transformers: TransformerHero[] = [
  new TransformerHero(1, "Bumblebee", 2, 4, "Transformers"),
  new TransformerHero(2, "Optimus Prime", 2, 6, "Transformers"),
  new TransformerHero(3, "Megatron", 6, 4, "Decepticons"),

  //   { id: 1, name: "Bumblebee", wings: 0, wheels: 4, clan: "Transformers" },
  //   { id: 2, name: "Optimus Prime", wings: 0, wheels: 6, clan: "Transformers" },
  //   { id: 3, name: "Megatron", wings: 6, wheels: 6, clan: "Decepticons" },
];

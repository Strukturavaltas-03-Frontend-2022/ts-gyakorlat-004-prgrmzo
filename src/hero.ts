import { IHuman } from "./hero-interface";

/**
 * Állítsd be helyesen a HumanHero osztályt!
 * Ez az IHuman interfészt implementálja.
 * Neve: HumanHero
 * Deklaráld benne az interfész által megkövetelt változókat.
 * Definiáld a konstruktort és kérj be minden változót, majd állítsd be őket.
 */

export class HumanHero implements IHuman {
  constructor(
    public id: number,
    public name: string,
    public sex: string,
    public age: number,
    public health: number,
    public photo?: string
  ) {}
}

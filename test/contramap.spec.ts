import { Predicate, contraMap } from '../src/contramap';

export class Person {
  constructor(readonly age: number, readonly name: string) {
    this.age = age;
    this.name = name;
  }
}

const felice = new Person(34, 'Felice');

const isAdult: Predicate<number> = age => age >= 18;
const checkPersonUsingIsAdult = contraMap((p: Person) => p.age)(isAdult);

describe('A person of 20 years must be an adult', () => {
  it('felice is an adult', () => {
    const isAnAdult = checkPersonUsingIsAdult(felice);
    expect(isAnAdult).toBe(true);
  });
});

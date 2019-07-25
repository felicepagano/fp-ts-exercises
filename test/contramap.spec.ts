import { Predicate, contraMap } from '../src/contramap';

describe('Contravariant Functor', () => {

  class Person {
    constructor(readonly age: number, readonly name: string) {
      this.age = age;
      this.name = name;
    }
  }

  const isAdult: Predicate<number> = age => age >= 18;
  const checkPersonUsingIsAdult = contraMap((p: Person) => p.age)(isAdult);

  it('A 34yo Person must be an adult', () => {
    const felice = new Person(34, 'Felice');
    const isAnAdult = checkPersonUsingIsAdult(felice);
    expect(isAnAdult).toBe(true);
  });
});

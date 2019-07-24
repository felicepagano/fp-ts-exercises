// in java it's something like a BinaryOperator that is a BiFunction<T, T, T>
export interface Semigroup<A> {
  concat: (x: A, y: A) => A;
}

export class StringSemigroup implements Semigroup<string> {
  concat = (x: string, y: string): string => x + y;
}

export const stringSemigroup: Semigroup<string> = {
  concat: (x: string, y: string): string => x + y,
};

export class BooleanSemigroupAnd implements Semigroup<boolean> {
  concat = (x: boolean, y: boolean): boolean => x && y;
}

export const booleanSemigroupAnd: Semigroup<boolean> = {
  concat: (a: boolean, b: boolean): boolean => a && b,
};

export class BooleanSemigroupOr implements Semigroup<boolean> {
  concat = (x: boolean, y: boolean): boolean => x || y;
}

export const booleanSemigroupOr: Semigroup<boolean> = {
  concat: (a: boolean, b: boolean): boolean => a || b,
};

export class ObjectSemigroup implements Semigroup<object> {
  concat = (x: object, y: object): object => ({ ...x, ...y });
}

export type Predicate<A> = (a: A) => boolean;

const getPredicateSemigroup = <A>(
  S: Semigroup<boolean>
): Semigroup<Predicate<A>> => ({
  concat: (x, y) => a => S.concat(x(a), y(a)),
});

const pippo = getPredicateSemigroup(booleanSemigroupAnd);
const lenght: Predicate<string> = (s: string) => s.length % 2 === 0;
// pippo.concat(lenght, lenght)("pippo");

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

// l'insieme sostegno A in questo caso dovrebbe essere boolean. dato un semigruppo di boolean,
// viene restituito un semigruppo di predicate. il semigruppo S viene usato per combinare i due
// predicati.
export const getPredicateSemigroup = <A>(
  S: Semigroup<boolean>
): Semigroup<Predicate<A>> => ({
  concat: (x, y) => a => S.concat(x(a), y(a)),
});

export const gT0 = (s: string) => s.length > 0;
export const lT10 = (s: string) => s.length < 10;

// ad esempio posso usare l'&& logico per combinare il risultato di due predicati come
// maggiore di 0 e minore di 10. getPredicateSemigroup applicherà la logica di combine
// di booleanSemigroupAnd e la applicherà ai risultati dei due predicati applicati alla
// stringa passata.
export const stringGT0AndLT10 = getPredicateSemigroup<string>(
  booleanSemigroupAnd
).concat(gT0, lT10);

export const freeSemigroup = <A>(): Semigroup<A[]> => ({
  concat: (x, y) => x.concat(y),
});

export const freeSemigroupStringInstance = freeSemigroup<string>();

export type Predicate<A> = (a: A) => boolean;

// function contraMap<A, B>(f: (b: B) => A, p: Predicate<A>): Predicate<B> {
//     return b => p(f(b))
// }
// funtore controvariante
export const contraMap = <A, B>(f: (b: B) => A) => (fa: Predicate<A>) => (
  b: B
) => fa(f(b));

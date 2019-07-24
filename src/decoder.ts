export type Decoder<A> = (s: string) => A;
export const map = <A, B>(f: (a: A) => B) => (decoder: Decoder<A>) => (
  s: string
) => f(decoder(s));

// e.g.

export const myLength = (s: string) => s.length;
export const even = (n: number) => n % 2 === 0;

export const decoderMyLenght: Decoder<number> = myLength;
//const mappedD = mapDecoder(even, d)
export const lenghtAndThenEven = map(even)(decoderMyLenght);
lenghtAndThenEven('Felice');

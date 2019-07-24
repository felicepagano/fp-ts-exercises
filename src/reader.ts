import { Decoder } from './decoder';

export type Reader<E, A> = (e: E) => A;
export const map = <E, A, B>(f: (a: A) => B) => (
  reader: Reader<E, A>
): Reader<E, B> => (e: E) => f(reader(e));
export const map2 = <A, B>(f: (a: A) => B) => (
  decoder: Decoder<A>
): Decoder<B> => (s: string) => f(decoder(s));

export const lenght = (s: string) => s.length;
export const decoderLenght: Reader<string, number> = lenght;

export const even = (n: number): boolean => n % 2 === 0;
export const double = (i: number) => i * 2;

export const evenDecoder: Reader<string, boolean> = map2(even)(decoderLenght);
export const doubleDecoder: Reader<string, number> = map2(double)(lenght);

//assert 8
doubleDecoder('4');
//assert falses
evenDecoder('3');

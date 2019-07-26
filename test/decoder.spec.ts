import { Decoder, map } from "../src/decoder";

describe('test decoder functor', () => {

    const myLength: Decoder<number> = (s: string) => s.length;
    const even = (n: number) => n % 2 === 0;

    it('mapping a number decoder to a boolean decoder', () => {
        const lenghtAndThenEven: Decoder<boolean> = map(even)(myLength);
        const result = lenghtAndThenEven('Felice');
        expect(result).toBe(true);
      });
});
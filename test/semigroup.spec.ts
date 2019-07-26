import { stringGT0AndLT10, freeSemigroupStringInstance as freeSemigroup } from '../src/semigroup';

describe('test semigroup', () => {
    it('the string felice must be lower than 10 an greather then 0', () => {
        const result = stringGT0AndLT10("Felice");
        expect(result).toBe(true);
    });

    it('check free semigroup', () => {
        const xs = ["a", "b", "c"];
        const ys = ["x", "y", "z"];
        const result = freeSemigroup.concat(xs, ys);
        expect(result).toEqual(["a", "b", "c", "x", "y", "z"]);
    });
});
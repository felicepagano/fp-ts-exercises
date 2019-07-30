import { stringGT0AndLT10, freeSemigroupStringInstance as freeSemigroup, Semigroup, getProductSemiGroup, getProductSemiGroupTuple } from '../src/semigroup';

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

describe('example taken from slides', () => {
    const getSemigroupNumber = (): Semigroup<number> => ({
        concat: (a, b) => a + b,
    });

    const getSemigroupString = (): Semigroup<string> => ({
        concat: (a, b) => a + b,
    });

    it('test tuple array', () => {
        // es.
        const productSemigroup = getProductSemiGroup(
            getSemigroupNumber(),
            getSemigroupString()
        );
        // will return [3, "ab"]
        const result = productSemigroup.concat([1, 'a'], [2, 'b']);
        expect(result).toEqual([3, "ab"]);

    });

    it('test tuple type', () => {
        // es.
        const productSemigroup = getProductSemiGroupTuple(
            getSemigroupNumber(),
            getSemigroupString()
        );
        // will return [3, "ab"]
        const result = productSemigroup.concat([1, 'a'], [2, 'b']);
        expect(result).toEqual([3, "ab"]);

    });
});
export type Tuple<L, R> = [L, R];

export const mapLeft = <L, M, R>(f: (l: L) => M) => (tuple: Tuple<L, R>) => [f(tuple[0]), tuple[1]];
export const mapRight = <L, R, M>(f: (r: R) => M) => (tuple: Tuple<L, R>) => [tuple[0], f(tuple[1])];

export const mapTuple = <L, M, R, S>(lf: (l: L) => M, rf: (r: R) => S) => (
  t: Tuple<L, R>
) => {
  const mappedR = mapRight(rf)(t);
  const mappedL = mapLeft(lf)(t);
  return [mappedL[0], mappedR[1]];
};
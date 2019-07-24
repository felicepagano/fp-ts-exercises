export type Tuple<L, R> = [L, R];

export const mapTuple = <L, M, R, S>(lf: (l: L) => M, rf: (r: R) => S) => (
  t: Tuple<L, R>
) => [lf(t[0]), rf(t[1])];

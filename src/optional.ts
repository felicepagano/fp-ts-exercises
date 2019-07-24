export class Optional<A> {
  constructor(readonly value: A) {}
  of<B>(a: B): Optional<B> {
    return new Optional(a);
  }
  map<B>(f: (a: A) => B): Optional<B> {
    return this.of(f(this.value));
  }
}

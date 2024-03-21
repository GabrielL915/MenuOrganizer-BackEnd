export type Result<O, E> = Ok<O> | Err<E>;
export const OK: unique symbol = Symbol('Ok');
export const ERR: unique symbol = Symbol('Err');

export type Ok<A> = Readonly<{
  kind: typeof OK;
  value: A;
  map<B>(fn: (_: A) => B): Ok<B>;
  bind<B, E>(fn: (_: A) => Result<B, E>): Result<B, E>;
  match<B>(obj: { ok: (_: A) => B; err: (_: never) => B }): B;
}>;

export function ok<A>(value: A): Ok<A> {
  return {
    kind: OK,
    value,
    map(fn) {
      return ok(fn(this.value));
    },
    bind(fn) {
      return fn(this.value);
    },
    match(obj) {
      return obj.ok(this.value);
    },
  };
}

export type Err<E> = Readonly<{
  kind: typeof ERR;
  error: E;
  map<B>(_fn: (_: never) => B): Err<E>;
  bind<B, _E>(fn: (_: never) => Result<B, _E>): Err<E>;
  match<B>(obj: { ok: (_: never) => B; err: (_: E) => B }): B;
}>;

export function err<E>(e: E): Err<E> {
  const self: Err<E> = {
    kind: ERR,
    error: e,
    map() {
      return self;
    },
    bind() {
      return self;
    },
    match(obj) {
      return obj.err(this.error);
    },
  };
  return self;
}

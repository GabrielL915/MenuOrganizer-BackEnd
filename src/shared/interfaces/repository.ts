/* export interface Create<I, O> {
  createOne(input: I): Promise<O>;
}
export interface Update<I, K extends keyof I, O> {
  update(key: I[K], input: I): Promise<O>;
}

export interface Delete<I, K extends keyof I, O> {
  delete(key: I[K]): Promise<O>;
}

export interface FindOne<I, K extends keyof I, O> {
  findOne(key: I[K]): Promise<O>;
}

export interface FindAll<O> {
  findAll(): Promise<O[]>;
}
 */

export interface Create<I, O> {
  createOne(input: I): Promise<O>;
}

export interface Update<I, K, O> {
  update(key: K, input: I): Promise<O>;
}

export interface Delete<K, O> {
  delete(key: K): Promise<O>;
}

export interface FindOne<K, O> {
  findOne(key: K): Promise<O>;
}

export interface FindAll<O> {
  findAll(): Promise<O[]>;
}

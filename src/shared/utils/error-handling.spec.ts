import { ok, err, OK, ERR } from './error-handling';

describe('Result type', () => {
  describe('ok', () => {
    it('should create an Ok result', () => {
      const result = ok(10);
      expect(result.kind).toBe(OK);
      expect(result.value).toBe(10);
    });

    it('should map over an Ok value', () => {
      const result = ok(5);
      const mapped = result.map((x) => x * 2);
      expect(mapped.value).toBe(10);
    });

    it('should bind over an Ok value', () => {
      const result = ok(5);
      const bound = result.bind((x) => ok(x * 2));
      const finalValue = bound.match({
        ok: (value) => value,
        err: () => fail(-1),
      });
      expect(finalValue).toBe(10);
    });

    it('should match an Ok value', () => {
      const result = ok(5);
      const matched = result.match({
        ok: (value) => value * 2,
        err: () => 0,
      });
      expect(matched).toBe(10);
    });
  });

  describe('err', () => {
    it('should create an Err result', () => {
      const result = err('error message');
      expect(result.kind).toBe(ERR);
      expect(result.error).toBe('error message');
    });

    it('should not change when map is called', () => {
      const result = err('error message');
      const mapped = result.map(() => 10);
      expect(mapped.error).toBe('error message');
    });

    it('should not change when bind is called', () => {
      const result = err('error message');
      const bound = result.bind(() => ok(10));
      expect(bound.error).toBe('error message');
    });

    it('should match an Err value', () => {
      const result = err('error message');
      const matched = result.match({
        ok: () => 'ok message',
        err: (error) => error,
      });
      expect(matched).toBe('error message');
    });
  });
});

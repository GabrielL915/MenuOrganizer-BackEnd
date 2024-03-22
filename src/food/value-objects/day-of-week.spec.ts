import { DayOfWeek } from './day-of-week';

describe('DayOfWeek', () => {
  describe('create method', () => {
    it('should create an instance for a valid day', () => {
      const day = 'segunda';
      const dayOfWeekInstance = DayOfWeek.create(day);
      expect(dayOfWeekInstance).toBeInstanceOf(DayOfWeek);
      expect(dayOfWeekInstance.Value).toBe(day);
    });

    it('should throw an error for an invalid day', () => {
      const invalidDay = 'invalid-day';
      expect(() => DayOfWeek.create(invalidDay)).toThrow(
        'Falhou ao criar instância de dia da semana',
      );
    });
  });
});

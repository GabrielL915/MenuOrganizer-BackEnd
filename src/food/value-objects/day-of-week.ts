export class DayOFWeek {
  private readonly value: string;
  private readonly brand: symbol = Symbol('DayOfWeek');

  private constructor(value: string) {
    this.validDaysOfWeek(value);
    this.value = value;
  }

  get Value(): string {
    return this.value;
  }

  private validDaysOfWeek(dayOfWeek: string) {
    const validDays = [
      'segunda',
      'terca',
      'quarta',
      'quinta',
      'sexta',
      'sabado',
      'domingo',
    ];
    const days = dayOfWeek.trim().toLowerCase();
    if (!validDays.includes(days)) {
      throw new Error('Invalid day of week');
    }
  }

  static create(dayOfWeek: string): DayOFWeek {
    try {
      return new DayOFWeek(dayOfWeek);
    } catch (error) {
      throw new Error('Fail to create day of week instance');
    }
  }
}

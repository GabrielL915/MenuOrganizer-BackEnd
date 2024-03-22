export class DayOfWeek {
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
      throw new Error('Dia da semana inválido');
    }
  }

  static create(dayOfWeek: string): DayOfWeek {
    try {
      return new DayOfWeek(dayOfWeek);
    } catch (error) {
      throw new Error('Falhou ao criar instância de dia da semana');
    }
  }
}

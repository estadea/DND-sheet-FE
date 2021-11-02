export class User {

  constructor(
    public readonly id: string,
    public username: string,
    public email: string,
    public sex: 'F' | 'M',
    public ruolo: number
  ) {
  }
}

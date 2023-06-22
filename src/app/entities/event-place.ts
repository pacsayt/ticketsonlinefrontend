export class EventPlace {

  public static readonly undefinedId : number = -1; // == const since TS 2.0

  constructor(private _iD : number, private _name : string, private _noOfSeats : number) { }

  get iD(): number {
    return this._iD;
  }

  set iD(value: number) {
    this._iD = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get noOfSeats(): number {
    return this._noOfSeats;
  }

  set noOfSeats(value: number) {
    this._noOfSeats = value;
  }

  public getId(): number {
    return this._iD;
  }

  public getName(): string {
    return this._name;
  }

  public getNoOfSeats(): number {
    return this._noOfSeats;
  }

  public setId( iD : number): void {
    this._iD = iD;
  }

  public setName( name : string): void {
    this._name = name;
  }

  public setNoOfSeats( noOfSeats : number): void {
    this._noOfSeats = noOfSeats;
  }

}

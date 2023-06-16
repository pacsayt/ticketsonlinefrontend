export class EventPlace {

  constructor(private iD : number, private name : string, private noOfSeats : number) { }

  public getId(): number {
    return this.iD;
  }

  public getName(): string {
    return this.name;
  }

  public getNoOfSeats(): number {
    return this.noOfSeats;
  }

  public setId( iD : number): void {
    this.iD = iD;
  }

  public setName( name : string): void {
    this.name = name;
  }

  public setNoOfSeats( noOfSeats : number): void {
    this.noOfSeats = noOfSeats;
  }

}

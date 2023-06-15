export class EventPlace {

  constructor(private iD : number, private name : string, private noOfSeats : number) { }

  get getId(): number {
    return this.iD;
  }

  get getName(): string {
    return this.name;
  }

  get getNoOfSeats(): number {
    return this.noOfSeats;
  }
}

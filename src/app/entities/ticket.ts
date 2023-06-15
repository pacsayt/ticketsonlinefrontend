import {Event} from "./event";

export class Ticket {

  constructor( private iD : number, private seatNo : number, private event : Event, private ticketPrice : number) { }
}

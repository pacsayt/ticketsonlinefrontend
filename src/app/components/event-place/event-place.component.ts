import {Component, OnInit} from '@angular/core';
import {EventPlace} from "../../entities/event-place";
import {EventPlaceAccessService} from "../../backendaccess/event-place-access.service";

@Component({
  selector: 'app-event-place',
  templateUrl: './event-place.component.html',
  styleUrls: ['./event-place.component.scss']
})
export class EventPlaceComponent implements OnInit {

  private eventPlaces : EventPlace[] = [];

  actName : string = '';
  actNoOfSeats : number = 0;

  constructor(private eventPlaceAccessService : EventPlaceAccessService) {
  }

  public getEventPlaces() : EventPlace[] {
    return this.eventPlaces;
  }

  public ngOnInit(): void {
    this.eventPlaces = this.eventPlaceAccessService.fetchAllEventPlaces()
  }

  public onTableRowClicked( eventPlaceClicked : EventPlace) : void {
    this.actName = eventPlaceClicked.getName();
    this.actNoOfSeats = eventPlaceClicked.getNoOfSeats();
  }

  public onSave(newName : string, newNoOfSeats : number): void {
    this.actName = "";
    this.actNoOfSeats = 0;

    const nextId: number = this.getNextId(); // pt++ : thought as a temporary solution until getting id from backend

    this.eventPlaces.push( new EventPlace(nextId, newName, newNoOfSeats));
  }

  private getNextId() : number {
    const idMax : number = this.eventPlaces.map( e => e.getId()).reduce( ( id1, id2 ) => id1 > id2 ? id1 : id2);
    return idMax + 1;
  }
}

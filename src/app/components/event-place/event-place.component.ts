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

  actId : number = EventPlace.undefinedId;
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
    this.actId = eventPlaceClicked.iD;
    this.actName = eventPlaceClicked.name;
    this.actNoOfSeats = eventPlaceClicked.noOfSeats;
  }

  // Saves / updates  fields actId / actName / actNoOfSeats
  public onSave(): void {

    if ( this.actId === EventPlace.undefinedId ) {
      const nextId: number = this.getNextId(); // pt++ : thought as a temporary solution until getting id from backend

      this.eventPlaces.push(new EventPlace(nextId, this.actName, this.actNoOfSeats));
    }
    else {
      const toBeUpdatedEventPlace : EventPlace | undefined = this.getEventPlaceById( this.actId);

      if ( toBeUpdatedEventPlace != undefined ) {
        toBeUpdatedEventPlace.name = this.actName;
        toBeUpdatedEventPlace.noOfSeats = this.actNoOfSeats;
      }
    }

    this.actId = EventPlace.undefinedId;
    this.actName = "";
    this.actNoOfSeats = 0;
  }

  private getNextId() : number {
    const idMax : number = this.eventPlaces.map( e => e.getId()).reduce( ( id1, id2 ) => id1 > id2 ? id1 : id2);
    return idMax + 1;
  }

  private getEventPlaceById( searchedId : number ) : EventPlace | undefined {

    const eventPlacesFound : EventPlace[] = this.eventPlaces.filter( e => e.iD === searchedId);
    return eventPlacesFound.length > 0 ? eventPlacesFound[0] : undefined;
  }
}

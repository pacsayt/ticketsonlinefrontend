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

  public onSave(newName : string, newNoOfSeats : number): void {
    this.actName = "";
    this.actNoOfSeats = 0;

    this.eventPlaces.push( new EventPlace(0, newName, newNoOfSeats));
  }
}

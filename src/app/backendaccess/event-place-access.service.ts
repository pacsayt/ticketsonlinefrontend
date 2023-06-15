import { Injectable } from '@angular/core';
import {EventPlace} from "../entities/event-place";

@Injectable({
  providedIn: 'root'
})
export class EventPlaceAccessService {

  constructor() { }

  public fetchAllEventPlaces() : EventPlace[] {
    return [
      new EventPlace(1, "Event place 1", 10),
      new EventPlace(2, "Event place 2", 20),
      new EventPlace(3, "Event place 3", 30)
    ];
  }
}

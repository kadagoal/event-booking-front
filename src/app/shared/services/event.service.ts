import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { CreateEvent, EventModel, EventsResponse } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private readonly apiUrl = `https://event-booking-back.onrender.com/api/events`;

  constructor(private http: HttpClient) {}

  getEvents(): Observable<EventModel[]> {
    return this.http.get<EventsResponse>(`${this.apiUrl}/search`)
    .pipe(
      map(res => res.data)
    );
  }

  createEvent(payload: CreateEvent): Observable<EventModel> {
    return this.http.post<EventModel>(this.apiUrl, payload);
  }

  getMyEvents(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(`${this.apiUrl}/my-events`);
  }
}

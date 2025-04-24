import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, tap } from 'rxjs';
import { CreateEvent, EventModel, EventsResponse } from '../models/event.model';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private readonly apiUrl = `${environment.apiUrl}api/events`;
  private eventsSubject = new BehaviorSubject<EventModel[]>([]);
  public events$ = this.eventsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadDefaultEvents();
  }

  private loadDefaultEvents(): void {
    const params = new HttpParams()
      .set('page', 1)
      .set('limit', 100);
    this.http.get<{ data: EventModel[] }>(`${this.apiUrl}/search`, { params }).subscribe({
      next: (res) => this.eventsSubject.next(res.data),
      error: (err) => {
        console.error('Error al cargar eventos por defecto:', err);
        this.eventsSubject.next([]);
      }
    });
  }

  getEvents(): Observable<EventModel[]> {
    return this.events$;
  }


  myEvents(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(`${this.apiUrl}/my-events`);
  }
  

  createEvent(payload: CreateEvent): Observable<EventModel> {
    return this.http.post<EventModel>(this.apiUrl, payload);
  }

  getMyEvents(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(`${this.apiUrl}/my-events`);
  }

  searchEvents(filters: {
    title?: string;
    category?: string;
    location?: string;
    startDate?: string;
    page?: number;
    limit?: number;
  }): void {
    let params = new HttpParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (value) params = params.append(key, value.toString());
    });

    this.http.get<{ data: EventModel[] }>(`${this.apiUrl}/search`, { params }).subscribe({
      next: (res) => this.eventsSubject.next(res.data),
      error: (err) => {
        console.error('Error al buscar eventos:', err);
        this.eventsSubject.next([]);
      }
    });
  }
}

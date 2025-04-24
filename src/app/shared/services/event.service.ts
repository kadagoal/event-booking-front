import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { EventModel } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private readonly events: EventModel[] = [
    {
      "id": 1,
      "title": "El Clásico: Barcelona vs Real Madrid",
      "category": "Deporte",
      "price": 120,
      "startDate": "2025-05-15T20:45:00",
      "endDate": "2025-05-15T22:45:00",
      "location": "Camp Nou, Barcelona",
      "image": "https://images.pexels.com/photos/31760116/pexels-photo-31760116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "attendeesCapacity": 55000,
      "reservations": 50600,
      "soldPercentage": 92,
      "label": "Últimas entradas"
    },
    {
      "id": 3,
      "title": "Champions League Semifinal: Manchester City vs Bayern",
      "category": "Deporte",
      "price": 150,
      "startDate": "2025-05-15T20:45:00",
      "endDate": "2025-05-15T22:45:00",
      "location": "Etihad Stadium, Manchester",
      "image": "https://cdn.pixabay.com/photo/2016/05/06/17/06/ballerinas-1376250_1280.jpg",
      "attendeesCapacity": 55000,
      "reservations": 50600,
      "soldPercentage": 92,
      "label": "Últimas entradas"
    },
    {
      "id": 2,
      "title": "Final Copa del Rey: Betis vs Sevilla",
      "category": "Deporte",
      "price": 95,
      "startDate": "2025-05-15T20:45:00",
      "endDate": "2025-05-15T22:45:00",
      "location": "Estadio La Cartuja, Sevilla",
      "image": "https://cdn.pixabay.com/photo/2017/11/17/16/05/duck-2957809_1280.jpg",
      "attendeesCapacity": 55000,
      "reservations": 50600,
      "soldPercentage": 92,
      "label": "Últimas entradas"
    },
    {
      "id": 3,
      "title": "Champions League Semifinal: Manchester City vs Bayern",
      "category": "Deporte",
      "price": 150,
      "startDate": "2025-05-15T20:45:00",
      "endDate": "2025-05-15T22:45:00",
      "location": "Etihad Stadium, Manchester",
      "image": "https://cdn.pixabay.com/photo/2017/08/02/13/09/confetti-2571539_1280.jpg",
      "attendeesCapacity": 55000,
      "reservations": 50600,
      "soldPercentage": 92,
      "label": "Últimas entradas"
    },
    {
      "id": 2,
      "title": "Final Copa del Rey: Betis vs Sevilla",
      "category": "Deporte",
      "price": 95,
      "startDate": "2025-05-15T20:45:00",
      "endDate": "2025-05-15T22:45:00",
      "location": "Estadio La Cartuja, Sevilla",
      "image": "https://cdn.pixabay.com/photo/2015/11/20/22/28/dancers-1054002_1280.jpg",
      "attendeesCapacity": 55000,
      "reservations": 50600,
      "soldPercentage": 92,
      "label": "Últimas entradas"
    },
    {
      "id": 2,
      "title": "Final Copa del Rey: Betis vs Sevilla",
      "category": "Deporte",
      "price": 95,
      "startDate": "2025-05-15T20:45:00",
      "endDate": "2025-05-15T22:45:00",
      "location": "Estadio La Cartuja, Sevilla",
      "image": "https://cdn.pixabay.com/photo/2016/11/29/07/06/bleachers-1867992_1280.jpg",
      "attendeesCapacity": 55000,
      "reservations": 50600,
      "soldPercentage": 92,
      "label": "Últimas entradas"
    }
  ];

  constructor(private http: HttpClient) {}

  getEvents(): Observable<EventModel[]> {
    return of(this.events);
  }
}

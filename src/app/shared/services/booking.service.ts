import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private reservations: Booking[] = [
    {
      "id": 1,
      "title": "Concierto de Rock",
      "category": "Música",
      "price": 75,
      "startDate": "2025-06-15T20:00:00Z",
      "endDate": "2025-06-15T23:30:00Z",
      "location": "Auditorio Nacional, Bogotá",
      "image": "https://cdn.pixabay.com/photo/2016/11/29/07/06/bleachers-1867992_1280.jpg",
      "tickets": 4
    },
    {
      "id": 2,
      "title": "Feria Gastronómica",
      "category": "Alimentos",
      "price": 20,
      "startDate": "2025-07-10T10:00:00Z",
      "endDate": "2025-07-12T18:00:00Z",
      "location": "Parque Metropolitano Simón Bolívar",
      "image": "https://cdn.pixabay.com/photo/2016/11/29/07/06/bleachers-1867992_1280.jpg",
      "tickets": 2
    },
    {
      "id": 3,
      "title": "Obra de Teatro Infantil",
      "category": "Teatro",
      "price": 35,
      "startDate": "2025-08-05T15:00:00Z",
      "endDate": "2025-08-05T16:30:00Z",
      "location": "Teatro Colón, Bogotá",
      "image": "https://cdn.pixabay.com/photo/2016/11/29/07/06/bleachers-1867992_1280.jpg",
      "tickets": 1
    }
  ];


  constructor(private http: HttpClient) { }

  getReservations(): Observable<Booking[]> {
      return of(this.reservations);
    }
}

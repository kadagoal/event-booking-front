import { Injectable } from '@angular/core';
import { Booking } from '../models/booking.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private readonly apiUrl = `${environment.apiUrl}api/reservations`;

  constructor(private http: HttpClient) { }

  getReservations(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.apiUrl}`);
    }
}

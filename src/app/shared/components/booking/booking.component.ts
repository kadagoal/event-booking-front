import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { CardModule } from 'primeng/card';
import { Chip } from 'primeng/chip';
import { Observable } from 'rxjs';
import { Booking } from '../../models/booking.model';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-booking',
  imports: [ButtonModule, MenuModule, CommonModule, TabsModule, CardModule, Chip],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
    reservations$!: Observable<Booking[]>;

    constructor(private bookingService: BookingService) {}

    ngOnInit(): void {
        this.reservations$ = this.bookingService.getReservations();
      }
    
      trackByIndex(_index: number, _item: any): number {
        return _index;
      }

      dowload(){
          const pdfUrl = 'https://example.com/mi-archivo.pdf';
          const link = document.createElement('a');
          link.href = pdfUrl;
          link.download = 'mi-boleta.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
      }

}

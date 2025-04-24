import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Chip } from 'primeng/chip';
import { EventModel } from '../../models/event.model';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { EventService } from '../../services/event.service';
import { Router, RouterModule } from '@angular/router';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'event',
  imports: [CommonModule, CardModule, Chip, ButtonModule, RouterModule, ConfirmDialog, ToastModule, ProgressBarModule],
  providers: [MessageService, ConfirmationService],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  events$!: Observable<EventModel[]>;

  constructor(private eventsService: EventService, private messageService: MessageService, private router: Router) {}

  ngOnInit(): void {
    this.events$ = this.eventsService.getEvents();
  }

  onReserve(id: string) {
    this.eventsService.reserveEvent(id).subscribe({
      next: (response) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Reserva',
          detail: '¡Reserva realizada correctamente!'
        });
        this.router.navigate(['/reservas']);
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Reserva',
          detail: 'No se pudo realizar la reserva'
        });
      }
    });
  }

  trackByIndex(_index: number, _item: any): number {
    return _index;
  }
}

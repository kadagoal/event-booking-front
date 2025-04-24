import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Chip } from 'primeng/chip';
import { EventModel } from '../../models/event.model';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { EventService } from '../../services/event.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'event',
  imports: [CommonModule, CardModule, Chip, ButtonModule, RouterModule],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  events$!: Observable<EventModel[]>;

  constructor(private eventsService: EventService) {}

  ngOnInit(): void {
    this.events$ = this.eventsService.getEvents();
  }

  trackByIndex(_index: number, _item: any): number {
    return _index;
  }
}

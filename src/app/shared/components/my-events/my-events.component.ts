import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'primeng/tabs';
import { CardModule } from 'primeng/card';
import { Chip } from 'primeng/chip';
import { Observable } from 'rxjs';
import { EventModel } from '../../models/event.model';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-my-events',
  imports: [ButtonModule, MenuModule, CommonModule, TabsModule, CardModule, Chip],
  templateUrl: './my-events.component.html',
  styleUrl: './my-events.component.css'
})
export class MyEventsComponent {

  events$!: Observable<EventModel[]>;
  
  constructor(private eventsService: EventService) {}

  ngOnInit(): void {
    this.events$ = this.eventsService.getEvents();
  }

  trackByIndex(_index: number, _item: any): number {
    return _index;
  }

}

import { Routes } from '@angular/router';
import { EventComponent } from './shared/components/event/event.component';
import { BookingComponent } from './shared/components/booking/booking.component';

export const routes: Routes = [
    { path: 'eventos',   component: EventComponent },
    { path: 'reservas',   component: BookingComponent, data: { hideHeaderFooter: true } },
    { path: '',         redirectTo: '/eventos', pathMatch: 'full' },
    { path: '**',       redirectTo: '/eventos' }
];

import { Routes } from '@angular/router';
import { EventComponent } from './shared/components/event/event.component';
import { BookingComponent } from './shared/components/booking/booking.component';
import { MyEventsComponent } from './shared/components/my-events/my-events.component';
import { CreateEventComponent } from './shared/components/create-event/create-event.component';
import { LoginComponent } from './shared/components/login/login.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { ConfirmComponent } from './shared/components/confirm/confirm.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent, data: { hideHeaderFooter: true, nothing:true } },
    { path: 'register', component: RegisterComponent, data: { hideHeaderFooter: true, nothing:true } },
    { path: 'confirm', component: ConfirmComponent, data: { hideHeaderFooter: true, nothing:true } },
    { path: 'eventos',   component: EventComponent },
    { path: 'reservas',   component: BookingComponent, data: { hideHeaderFooter: true } },
    { path: 'mis-eventos',   component: MyEventsComponent, data: { hideHeaderFooter: true } },
    { path: 'crear-evento',   component: CreateEventComponent, data: { hideHeaderFooter: true } },
    { path: 'editar-evento/:id',   component: CreateEventComponent, data: { hideHeaderFooter: true } },
    { path: '',         redirectTo: '/eventos', pathMatch: 'full' },
    { path: '**',       redirectTo: '/eventos' }
];

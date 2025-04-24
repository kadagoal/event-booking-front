import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./shared/components/menu/menu.component";
import { EventComponent } from "./shared/components/event/event.component";
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BookingComponent } from './shared/components/booking/booking.component';
import { CommonModule } from '@angular/common';
import { CreateEventComponent } from './shared/components/create-event/create-event.component';
import { MyEventsComponent } from './shared/components/my-events/my-events.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/auth.interceptor';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    MenuComponent, 
    HeaderComponent, 
    EventComponent, 
    FooterComponent, 
    BookingComponent, 
    CreateEventComponent, 
    MyEventsComponent, 
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
})
export class AppComponent {
}

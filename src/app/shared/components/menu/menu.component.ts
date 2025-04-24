
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'menu',
  standalone: true,
  imports: [MenubarModule, AvatarModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Eventos',
                icon: 'pi pi-calendar-clock',
                routerLink: '/eventos',
                routerLinkActiveOptions: { exact: true }
            },
            {
                label: 'Mis Reservas',
                icon: 'pi pi-book',
                routerLink: '/reservas',
                routerLinkActiveOptions: { exact: true }
            }
        ]
    }
}

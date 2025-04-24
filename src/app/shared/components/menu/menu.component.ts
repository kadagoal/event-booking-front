
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'menu',
  standalone: true,
  imports: [MenubarModule, AvatarModule, CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items: MenuItem[] | undefined;
  constructor(private tokenStorage: TokenStorageService) {}

    isLoggedIn(): boolean {
        return this.tokenStorage.isAuthenticated();
    }

    logOuth(){
        this.tokenStorage.clear();
        this.isLoggedIn();
    }

    ngOnInit() {
        if(this.isLoggedIn()){
            if(this.tokenStorage.getRole() == 'event_creator'){
                this.items = [
                    {
                        label: 'Eventos',
                        icon: 'pi pi-calendar-clock',
                        routerLink: '/eventos',
                        routerLinkActiveOptions: { exact: true }
                    },
                    {
                        label: 'Mis Eventos',
                        icon: 'pi pi-calendar-clock',
                        routerLink: '/mis-eventos',
                        routerLinkActiveOptions: { exact: true }
                    },
                    {
                        label: 'Crear Evento',
                        icon: 'pi pi-book',
                        routerLink: '/crear-evento',
                        routerLinkActiveOptions: { exact: true }
                    }
                ]
            }else{
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
            
        }else{
            this.items = [
                {
                    label: 'Eventos',
                    icon: 'pi pi-calendar-clock',
                    routerLink: '/eventos',
                    routerLinkActiveOptions: { exact: true }
                }
            ]
        }
        
    }
}

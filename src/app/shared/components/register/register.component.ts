import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';

interface Role {
  name: string;
  value: string;
}
@Component({
  selector: 'app-register',
  imports: [FormsModule, PasswordModule, InputTextModule, ButtonModule, ReactiveFormsModule, RouterModule, InputNumberModule, SelectModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  roles: Role[] = [
    { name: 'Cliente',           value: 'client'    },
    { name: 'Asistente',         value: 'assistant' },
    { name: 'Organizador Evento', value: 'organizer' }
  ];

  selectedRole: string | null = null;

}

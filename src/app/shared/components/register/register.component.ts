import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { AuthService } from '../../services/auth.service';
import { finalize } from 'rxjs';
import { CommonModule } from '@angular/common';

interface Role {
  name: string;
  value: string;
}
@Component({
  selector: 'app-register',
  imports: [PasswordModule, InputTextModule, ButtonModule, ReactiveFormsModule, RouterModule, InputNumberModule, SelectModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup;
  loading = false;
  error: string | null = null;

  roles: Role[] = [
    { name: 'Usuario', value: 'user' },
    { name: 'Organizador Evento', value: 'event_creator' }
  ];

  constructor(private fb: FormBuilder,
    private auth: AuthService,
    private router: Router) { }

  selectedRole: string | null = null;

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password_hash: ['', Validators.required],
      role: [null, Validators.required],
      cellphone: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) return;
    this.loading = true;
    this.error = null;

    this.auth.register(this.registerForm.value)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: () => this.router.navigate(['/confirm'], {
          queryParams: { email: this.registerForm.get('email')!.value }
        }),
        error: err => this.error = err.error?.message || 'Error al registrar'
      });
  }

}

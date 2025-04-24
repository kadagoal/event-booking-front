import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { finalize } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'login',
  imports: [PasswordModule, InputTextModule, ButtonModule, ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;
  loading = false;
  error: string | null = null;

  constructor( private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

    ngOnInit() {
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
    }
  
    onSubmit() {
      if (this.loginForm.invalid) {
        return;
      }
      this.loading = true;
      this.error = null;
  
      this.authService.login(this.loginForm.value)
        .pipe(finalize(() => (this.loading = false)))
        .subscribe({
          next: () => this.router.navigate(['/eventos']),
          error: () => this.error = 'Credenciales inválidas'
        });
    }

}

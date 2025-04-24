import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm',
  imports: [ReactiveFormsModule, ButtonModule, CommonModule],
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.css'
})
export class ConfirmComponent {

  confirmForm!: FormGroup;
  loading = false;
  error: string | null = null;
  email!: string;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.confirmForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      code: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    });
  }

  onSubmit() {
    if (this.confirmForm.invalid) return;
    this.loading = true;
    this.error = null;

    const payload = {
      email: this.confirmForm.get('email')!.value,
      code: this.confirmForm.get('code')!.value
    };

    this.auth.confirmAccount(payload)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: () => this.router.navigate(['/login']),
        error: err => this.error = err.error?.message || 'Error al confirmar la cuenta'
      });
  }

}

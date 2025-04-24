import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirm',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule, CommonModule],
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.css'
})
export class ConfirmComponent {
  confirmForm!: FormGroup;
  loading = false;
  error: string | null = null;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const emailFromQuery = this.route.snapshot.queryParamMap.get('email') || '';

    this.confirmForm = this.fb.group({
      email: [{ value: emailFromQuery, disabled: true }, [Validators.required, Validators.email]],
      code: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.confirmForm.invalid) return;
    this.loading = true;
    this.error = null;

    const payload = {
      email: this.confirmForm.getRawValue().email, // `getRawValue()` porque el email está deshabilitado
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

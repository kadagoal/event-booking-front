import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InputNumber } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';
import { CreateEvent } from '../../models/event.model';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-create-event',
  imports: [FormsModule, InputTextModule, ReactiveFormsModule, InputNumber, SelectModule, DropdownModule, CalendarModule, ButtonModule],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent {
  form!: FormGroup;
  loading = false;
  error: string | null = null;
  date2: Date | undefined;

  cities = [
    { name: 'Bogotá' },
    { name: 'Medellin' },
    { name: 'Fusagasuga'},
    { name: 'Villavicencio'},
    { name: 'Leticia'}
  ];

  categories = [
    { label: 'Conciertos', value: 'Conciertos' },
    { label: 'Comida', value: 'Comida' },
    { label: 'Teatro', value: 'Teatro' },
    { label: 'Deportes', value: 'Deportes' },
    { label: 'Gastronomia', value: 'Gastronomia' },
    { label: 'Arte', value: 'Arte' },
    { label: 'Familiar', value: 'Familiar' }
  ];

  constructor(private fb: FormBuilder,
    private eventService: EventService,
    private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      category: [null, Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      location: ['', Validators.required],
      image: ['', Validators.required],
      attendeesCapacity: [0, [Validators.required, Validators.min(1)]],
      label: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.loading = true;
    this.error = null;

    const payload: CreateEvent = {
      ...this.form.value,
      startDate: this.form.value.startDate.toISOString(),
      endDate: this.form.value.endDate.toISOString()
    };

    this.eventService.createEvent(payload)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: () => {
          this.eventService.loadDefaultEvents();
          this.router.navigate(['/eventos']);
        },
        error: err => this.error = err.error?.message || 'Error al crear el evento'
      });
  }
}

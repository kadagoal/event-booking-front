import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InputNumber } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-create-event',
  imports: [FormsModule, InputTextModule, ReactiveFormsModule, InputNumber, SelectModule, DropdownModule, CalendarModule, ButtonModule],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent {

  cities: City[] | undefined;

    selectedCity: City | undefined;

    date2: Date | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }

    categories = [
      { label: 'Conciertos', value: 'Conciertos' },
      { label: 'Comida', value: 'Comida' },
      { label: 'Teatro', value: 'Teatro' },
      { label: 'Deportes', value: 'Deportes' },
      { label: 'Gastronomia', value: 'Gastronomia' },
      { label: 'Arte', value: 'Arte' },
      { label: 'Familiar', value: 'Familiar' }
    ];


}

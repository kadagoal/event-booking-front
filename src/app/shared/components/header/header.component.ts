import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { ButtonModule } from 'primeng/button';
import { Chip } from 'primeng/chip';
import { InputTextModule } from 'primeng/inputtext';

interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'header',
  imports: [FormsModule, SelectModule, DatePickerModule, ButtonModule, Chip, InputTextModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
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

}

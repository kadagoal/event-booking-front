import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { ButtonModule } from 'primeng/button';
import { Chip } from 'primeng/chip';
import { InputTextModule } from 'primeng/inputtext';
import { EventService } from '../../services/event.service';
import { formatDate, CommonModule } from '@angular/common';

interface City {
  name: string;
}

@Component({
  selector: 'header',
  standalone: true,
  imports: [FormsModule, CommonModule, SelectModule, DatePickerModule, ButtonModule, Chip, InputTextModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  cities: City[] = [];
  selectedCity?: City;
  date2?: Date;
  searchText: string = '';
  selectedCategory: string = '';

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.cities = [
      { name: '' },
      { name: 'Bogotá' },
      { name: 'Medellin' },
      { name: 'Fusagasuga' },
      { name: 'Villavicencio' },
      { name: 'Leticia' }
    ];
  }

  onSearch() {
    const startDateFormatted = this.date2 ? formatDate(this.date2, 'yyyy-MM-dd', 'en-US') : undefined;

    const filters = {
      title: this.searchText || undefined,
      category: this.selectedCategory || undefined,
      location: this.selectedCity?.name || undefined,
      startDate: startDateFormatted,
      page: 1,
      limit: 50
    };

    this.eventService.searchEvents(filters);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.onSearch();
  }
}

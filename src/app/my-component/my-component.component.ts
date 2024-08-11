import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { CountryService } from '../country.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [HttpClientModule,CommonModule, FormsModule],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class  MyComponentComponent   
{
  httpClient = inject(HttpClient);
  //public data: Array<any> = [];
  countries: any[] = [];
  filteredCountries: any[] = [];
  searchQuery: string = '';
  
  ngOnInit() {
    this.httpClient.get('https://restcountries.com/v3.1/all')
      .subscribe((data: any) => {
        this.countries = data;
        this.filteredCountries = data;
      });
  }

  onSearch(): void {
    this.filteredCountries = this.countries.filter((country) =>
      country.name.common.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

}


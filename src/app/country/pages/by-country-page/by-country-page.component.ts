import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor( private CountryService: CountryService) { }

  public searchbyCountry(termino: string): void {
    this.CountryService.searchCountry(termino)
      .subscribe( resp => { this.countries = resp; })
  }

}
import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})

export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor(private CountryService: CountryService) { }

  public searchbyCapital(termino: string): void {
    this.CountryService.searchCapital(termino)
      .subscribe( resp => { this.countries = resp; })

  };

}

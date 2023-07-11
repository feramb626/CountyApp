import { Component } from '@angular/core';
import { count } from 'rxjs';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries: Country[] = [];

  constructor( private CountryService: CountryService) { }

  public searchbyRegion(termino: string): void {
    this.CountryService.searchRegion(termino)
      .subscribe( resp => { this.countries = resp; })
  }

}

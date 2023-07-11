import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit{

  public country?: Country | null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe( ({ idi }) => {
        console.log(idi);

        this.countryService.searchbyalpha(idi)
          .subscribe( country => {
            // console.log( {country} );

            if (!country)
              this.router.navigateByUrl('');
              return this.country = country;

          } )
      })
  }


}

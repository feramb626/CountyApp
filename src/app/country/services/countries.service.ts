import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, count, map, of, tap } from 'rxjs';
import { Country, Name } from '../interfaces/country';
import { CountriesRoutingModule } from '../countries-routing.module';

@Injectable({providedIn: 'root'})
export class CountryService {

  private url = 'https://restcountries.com/v3.1';


  constructor(private http : HttpClient) { }

  searchbyalpha(idi: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.url}/alpha/${idi}`)
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null),
        catchError( err => of(null))
      );
  }


  searchCapital(capital: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.url}/capital/${capital}`)
      .pipe(
        catchError( err => of([]))
      );
  }

  searchRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.url}/region/${region}`)
      .pipe(
        catchError( err => of([]))
      );
  }

  searchCountry(country: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.url}/name/${country}`)
      .pipe(
        catchError( err => of([]))
      );
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, count, delay, map, of, tap } from 'rxjs';
import { Country, Name } from '../interfaces/country';
import { CountriesRoutingModule } from '../countries-routing.module';

@Injectable({providedIn: 'root'})
export class CountryService {

  private url = 'https://restcountries.com/v3.1';

  constructor(private http : HttpClient) { }

  private getcountriesrequest( urt: string): Observable<Country[]>{
    return this.http.get<Country[]>(urt)
      .pipe(
        catchError( err => of([])),
      );
  }

  searchCapital(capital: string): Observable<Country[]> {
    const url = `${this.url}/capital/${capital}`;
    return this.getcountriesrequest(url);
    }

    searchRegion(region: string): Observable<Country[]> {
      const url = `${this.url}/region/${region}`;
      return this.getcountriesrequest(url);
    }

  searchCountry(country: string): Observable<Country[]> {
    const url = `${this.url}/name/${country}`;
    return this.getcountriesrequest(url);
  }

  searchbyalpha(idi: string): Observable<Country | null> {
    return this.http.get<Country[]>(`${this.url}/alpha/${idi}`)
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null),
        catchError( err => of(null))
      );
  }
}

import { Injectable, Query } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RawgService {

  constructor( private http: HttpClient ) {}

  getAllGames(): Observable<any> {
    const uri = 'games';
    return this.makePetition(uri);
  }

  getMostRatingGames(): Observable<any> {
    const uri = 'games?dates=2019-01-01,2020-01-01&ordering=-rating';
    return this.makePetition(uri);
  }

  makePetition(uri: string): Observable<any> {
    return this.http.get(`${environment.API_URL}/${uri}`);
  }

}

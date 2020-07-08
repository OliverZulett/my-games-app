import { Injectable, Query } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map, filter } from 'rxjs/operators';
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

  getRadomImage() {
    const uri = 'games?dates=2018-01-01,2019-12-31&ordering=-added';
    return this.makePetition(uri)
            .pipe(
              map(
                x => {
                  let games: Array<any> = x.results;
                  games = games.map( game => game.background_image);
                  return games[Math.floor(Math.random() * games.length)];
                }
              )
            );
  }

  private makePetition(uri: string): Observable<any> {
    return this.http.get(`${environment.API_URL}/${uri}`);
  }

}

import { Component } from '@angular/core';
import { RawgService } from './services/rawg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-games-app';
  game: any;

  constructor( private rawgService: RawgService ) {
    this.showResults();
  }

  showResults(): void {
    this.rawgService.getMostRatingGames()
      .subscribe(
        x => console.log(x),
        err => console.log(err),
        () => console.log('termino la peticion')
      );
  }
}

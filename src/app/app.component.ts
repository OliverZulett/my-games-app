import { Component } from '@angular/core';
import { RawgService } from './services/rawg.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  backgroundImage: string;

  constructor( private rawgService: RawgService ) {
    this.backgroundImage = '../assets/back.jpg';
    this.loadBackgroundImage();
  }

  loadBackgroundImage(): void {
    this.rawgService.getRadomImage()
      .subscribe(
        (backgroundImage: string) => {
          this.backgroundImage = backgroundImage;
          console.log(this.backgroundImage);
        },
        err => console.log(err),
        () => console.log('termino la peticion')
      );
  }
}

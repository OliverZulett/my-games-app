import { Component, OnInit, OnDestroy } from '@angular/core';
import { RawgService } from './services/rawg.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title: string;
  backgroundImage: string;
  backgrounfImageSubscribe: Subscription;

  constructor( private rawgService: RawgService ) {
    this.backgroundImage = '../assets/back.jpg';
  }

  ngOnInit(): void {
    this.loadBackgroundImage();
  }

  ngOnDestroy(): void {
    this.backgrounfImageSubscribe.unsubscribe();
  }

  private loadBackgroundImage(): void {
    this.backgrounfImageSubscribe = this.rawgService.getRadomImage()
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

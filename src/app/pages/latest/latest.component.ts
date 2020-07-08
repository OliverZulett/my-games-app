import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RawgService } from 'src/app/services/rawg.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit, OnDestroy {

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

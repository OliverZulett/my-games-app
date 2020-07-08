import { Component, OnInit, OnDestroy, AfterContentInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RawgService } from 'src/app/services/rawg.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements AfterContentInit, OnDestroy {

  backgroundImage: string;
  backgrounfImageSubscribe: Subscription;
  showBackground: boolean;

  constructor( private rawgService: RawgService ) {
    this.backgroundImage = '../assets/back.jpg';
    this.showBackground = false;
  }

  ngAfterContentInit(): void {
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

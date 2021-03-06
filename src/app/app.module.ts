import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { PopularsComponent } from './pages/populars/populars.component';
import { LatestComponent } from './pages/latest/latest.component';
import { GameComponent } from './pages/game/game.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SearchComponent } from './components/search/search.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameCardComponent } from './components/game-card/game-card.component';
import { StickyNavbarComponent } from './shared/sticky-navbar/sticky-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PopularsComponent,
    LatestComponent,
    GameComponent,
    NavbarComponent,
    AboutComponent,
    FooterComponent,
    SearchComponent,
    GameCardComponent,
    StickyNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

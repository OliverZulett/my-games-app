import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        // height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        // height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class NavbarComponent implements OnInit, OnDestroy {

  @HostBinding('attr.class') cssClass = 'custom-navbar';

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }

  constructor( private router: Router ) {
  }

  ngOnDestroy(): void {
    this.toggle();
  }

  ngOnInit(): void {
    this.toggle();
  }

}

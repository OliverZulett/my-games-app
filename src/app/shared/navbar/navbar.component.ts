import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  @HostBinding('attr.class') cssClass = 'custom-navbar';


  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

}

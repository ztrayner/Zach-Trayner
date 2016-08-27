import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-nav-menu',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'nav-menu.component.html',
  styleUrls: ['nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

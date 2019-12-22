import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  numberOfSideMenuItems;
  constructor() { }

  ngOnInit() {
    this.numberOfSideMenuItems  = Array.from(Array(8)).map(i => i);
  }

}

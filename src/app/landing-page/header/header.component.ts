import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navs = ['Explore', 'For Designers', 'Hiring Designers'];

  rotate = false;
  remove = false;
  toggle = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNav() {
    if(!this.toggle) {
      this.toggle = true;
      this.rotate = true;
      this.remove = true;
    } else {
      this.toggle = false;
      this.rotate = false;
      this.remove = false;
    }
  }

}

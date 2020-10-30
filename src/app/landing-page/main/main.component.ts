import { Component, OnInit } from '@angular/core';
import { cardList } from 'src/shared/model/dummy_data';
import { Card } from 'src/shared/model/model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  subNav = ["All", "Animation", "Branding", "Illustration", "Mobile", "Print", "Product",      "Typography", "Web"];

  cardList: Card[];

  constructor() {
    this.cardList = cardList;
  }

  ngOnInit(): void {
  }
}

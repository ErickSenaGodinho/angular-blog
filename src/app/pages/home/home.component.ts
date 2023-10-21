import { Component, OnInit } from '@angular/core';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  principalNews = dataFake[0];
  secondaryNews = dataFake.slice(1, 4);
  constructor() {}

  ngOnInit(): void {}
}

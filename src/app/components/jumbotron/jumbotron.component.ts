import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title:string = 'TOP MOVIES';
  description:string = 'The best movies according to IMDB users';
}

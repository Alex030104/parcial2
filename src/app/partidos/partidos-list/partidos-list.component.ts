import { Component, OnInit } from '@angular/core';
import { Partido } from '../Partido';

@Component({
  selector: 'app-partidos-list',
  templateUrl: './partidos-list.component.html',
  styleUrls: ['./partidos-list.component.css']
})
export class PartidosListComponent implements OnInit {

partidos: Array<Partido> = [];
  constructor() { }

  ngOnInit() {
  }

}

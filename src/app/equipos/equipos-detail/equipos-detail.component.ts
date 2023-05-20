import { Component, Input, OnInit } from '@angular/core';
import { Equipo } from '../Equipo';

@Component({
  selector: 'app-equipos-detail',
  templateUrl: './equipos-detail.component.html',
  styleUrls: ['./equipos-detail.component.css']
})
export class EquiposDetailComponent implements OnInit {

  @Input() equipoDetail!: Equipo;


  constructor() { }

  ngOnInit() {
  }

}

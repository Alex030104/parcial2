import { Component, OnInit } from '@angular/core';
import { Partido } from '../Partido';
import { PartidoService } from '../partido.service';

@Component({
  selector: 'app-partidos-list',
  templateUrl: './partidos-list.component.html',
  styleUrls: ['./partidos-list.component.css']
})
export class PartidosListComponent implements OnInit {

partidos: Array<Partido> = [];
  constructor(private partidoService: PartidoService) { }

  getpartidos():void{
    this.partidoService.getpartidos().subscribe((partidos) =>
    {
      this.partidos = this.partidos;
    });
  }

  ngOnInit() {
    this.getpartidos();
  }

}

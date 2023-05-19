import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidosListComponent } from './partidos-list/partidos-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PartidosListComponent],
  declarations: [PartidosListComponent]
})
export class PartidosModule { }

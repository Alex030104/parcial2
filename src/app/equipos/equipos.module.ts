import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquiposListComponent } from './equipos-list/equipos-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [EquiposListComponent],
  declarations: [EquiposListComponent]
})
export class EquiposModule { }

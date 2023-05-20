import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquiposDetailComponent } from './equipos-detail/equipos-detail.component';
import { EquiposListComponent } from './equipos-list/equipos-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [EquiposListComponent],
  declarations: [EquiposListComponent, EquiposDetailComponent]
})
export class EquiposModule { }

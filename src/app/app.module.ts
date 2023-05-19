import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartidosModule } from './partidos/partidos.module';
import { EquiposModule } from './equipos/equipos.module';
import { Away_teamModule } from './away_team/away_team.module';
import { Home_teamModule } from './home_team/home_team.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PartidosModule,
    EquiposModule,
    Away_teamModule,
    Home_teamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

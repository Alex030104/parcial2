import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { PartidosListComponent } from './partidos/partidos-list/partidos-list.component';
import { EquiposListComponent } from './equipos/equipos-list/equipos-list.component';

describe('AppComponent', () => {
beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [RouterTestingModule, HttpClientModule],
    declarations: [AppComponent, PartidosListComponent, EquiposListComponent],
  }).compileComponents();
});

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'parcial2'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('parcial2');
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { PartidosListComponent } from './partidos-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PartidoService } from '../partido.service';
import { Partido } from '../Partido';
import { Home_team } from 'src/app/home_team/Home_team';
import { Away_team } from 'src/app/away_team/Away_team';

describe('PartidosListComponent', () => {
  let component: PartidosListComponent;
  let fixture: ComponentFixture<PartidosListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PartidosListComponent ],
      providers: [ PartidoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidosListComponent);
    component = fixture.componentInstance;

    const home_team = new Home_team(
      faker.lorem.sentence(),
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.datatype.number(),
    );

    const away_team = new Away_team(
      faker.lorem.sentence(),
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.datatype.number(),
    );


    for(let i = 0; i < 10; i++) {
      const partido = new Partido(

        faker.lorem.sentence(),
        away_team,
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        home_team,
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      );
      component.partidos.push(partido);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it("Component has a table", () => {
   expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
 });

 it('should have an dd element ', () => {


   const dd = debug.query(By.css('dd'));
   const content: HTMLElement = dd.nativeElement;
   expect(content.textContent).toEqual(component.partidos[0].id.toString());

 });

 it('should have created 10 objects to list ', () => {

  for(let i = 0; i < 10; i++) {
   const dd = debug.query(By.css('dd'));
   const content: HTMLElement = dd.nativeElement;
   expect(content.textContent).toEqual(component.partidos[0].id.toString());
  }
 });

});

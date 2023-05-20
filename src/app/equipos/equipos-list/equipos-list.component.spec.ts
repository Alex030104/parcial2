/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { EquiposListComponent } from './equipos-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Equipo } from '../Equipo';
import { EquipoService } from '../equipo.service';
import { EquipoDetail } from '../equipo-detail';

describe('EquiposListComponent', () => {
  let component: EquiposListComponent;
  let fixture: ComponentFixture<EquiposListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ EquiposListComponent ],
      providers: [ EquipoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposListComponent);
    component = fixture.componentInstance;


    for(let i = 0; i < 10; i++) {
      const equipo = new EquipoDetail(

        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.datatype.number(),
      );
      component.equipos.push(equipo);
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
   expect(content.textContent).toEqual(component.equipos[0].name.toString());

 });

 it('should have created 10 objects to list ', () => {

  for(let i = 0; i < 10; i++) {
   const dd = debug.query(By.css('dd'));
   const content: HTMLElement = dd.nativeElement;
   expect(content.textContent).toEqual(component.equipos[0].name.toString());
  }
 });

});

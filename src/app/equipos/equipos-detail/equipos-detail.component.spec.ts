/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EquiposDetailComponent } from './equipos-detail.component';
import { faker } from '@faker-js/faker';
import { EquipoDetail } from '../equipo-detail';

describe('EquipoDetailComponent', () => {
  let component: EquiposDetailComponent;
  let fixture: ComponentFixture<EquiposDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquiposDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposDetailComponent);
    component = fixture.componentInstance;



    component.equipoDetail= new EquipoDetail(
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


    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should have a p.h3.p-3 element with EquipoDetail.group_letter', () => {
    const element: HTMLElement = debug.query(By.css('p.h3.p-3')).nativeElement;
    expect(element.textContent).toContain(component.equipoDetail.name);
  });


  it('should have one dd tag for component.equipoDetail.games_played', () => {
    const allDt : DebugElement[] = debug.queryAll(By.css('dt'));
    const node = allDt.find((value) => {
      return value.nativeElement.textContent == 'games_played';
    });
    expect(node?.nativeElement.nextSibling.textContent).toContain(component.equipoDetail.games_played);
  });

  it('should have one dd tag for component.EquipoDetail.games_played', () => {
    const allDt : DebugElement[] = debug.queryAll(By.css('dt'));
    const node = allDt.find((value) => {
      return value.nativeElement.textContent == 'games_played';
    });
    expect(node?.nativeElement.nextSibling.textContent).toContain(component.equipoDetail.games_played);
  });

  it('should have one dd tag for component.EquipoDetail.country', () => {
    const allDt : DebugElement[] = debug.queryAll(By.css('dt'));
    const node = allDt.find((value) => {
      return value.nativeElement.textContent == 'country';
    });
    expect(node?.nativeElement.nextSibling.textContent).toContain(component.equipoDetail.country);
  });

  it('should have one dd tag for component.EquipoDetail.group_letter', () => {
    const allDt : DebugElement[] = debug.queryAll(By.css('dt'));
    const node = allDt.find((value) => {
      return value.nativeElement.textContent == 'group_letter';
    });
    expect(node?.nativeElement.nextSibling.textContent).toContain(component.equipoDetail.group_letter);
  });









});


import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../routing-module/app-routing.module';
import { AppModule } from '../../app.module';
import { APP_BASE_HREF } from '@angular/common';

import { SportListComponent } from './sport-list.component';


import { Sport } from '../sport';
import { SportsService } from '../sports.service';

describe('SportListComponent', () => {
  let component: SportListComponent;
  let fixture: ComponentFixture<SportListComponent>;
  const sports: Sport[] = require('../../../assets/sports.json')

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, HttpClientModule, AppModule],
      declarations: [ ],
      providers: [{ provide: APP_BASE_HREF, useValue: '' }, SportsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

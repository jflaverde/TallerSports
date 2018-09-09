import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhleteListComponent } from './ahlete-list.component';

describe('AhleteListComponent', () => {
  let component: AhleteListComponent;
  let fixture: ComponentFixture<AhleteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhleteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhleteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

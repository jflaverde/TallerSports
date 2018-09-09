import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportSidebarComponent } from './sport-sidebar.component';

describe('SportSidebarComponent', () => {
  let component: SportSidebarComponent;
  let fixture: ComponentFixture<SportSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

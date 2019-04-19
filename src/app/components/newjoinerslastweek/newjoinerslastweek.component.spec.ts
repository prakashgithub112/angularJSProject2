import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewjoinerslastweekComponent } from './newjoinerslastweek.component';

describe('NewjoinerslastweekComponent', () => {
  let component: NewjoinerslastweekComponent;
  let fixture: ComponentFixture<NewjoinerslastweekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewjoinerslastweekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewjoinerslastweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

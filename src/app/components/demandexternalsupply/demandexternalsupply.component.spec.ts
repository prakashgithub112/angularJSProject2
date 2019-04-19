import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandexternalsupplyComponent } from './demandexternalsupply.component';

describe('DemandexternalsupplyComponent', () => {
  let component: DemandexternalsupplyComponent;
  let fixture: ComponentFixture<DemandexternalsupplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandexternalsupplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandexternalsupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

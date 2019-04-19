import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OveralldemandageinigComponent } from './overalldemandageinig.component';

describe('OveralldemandageinigComponent', () => {
  let component: OveralldemandageinigComponent;
  let fixture: ComponentFixture<OveralldemandageinigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OveralldemandageinigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OveralldemandageinigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompItComponent } from './comp-it.component';

describe('CompItComponent', () => {
  let component: CompItComponent;
  let fixture: ComponentFixture<CompItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

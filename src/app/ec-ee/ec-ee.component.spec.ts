import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcEeComponent } from './ec-ee.component';

describe('EcEeComponent', () => {
  let component: EcEeComponent;
  let fixture: ComponentFixture<EcEeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcEeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcEeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

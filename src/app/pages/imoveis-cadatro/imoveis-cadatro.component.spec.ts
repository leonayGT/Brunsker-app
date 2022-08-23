import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImoveisCadatroComponent } from './imoveis-cadatro.component';

describe('ImoveisCadatroComponent', () => {
  let component: ImoveisCadatroComponent;
  let fixture: ComponentFixture<ImoveisCadatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImoveisCadatroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImoveisCadatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

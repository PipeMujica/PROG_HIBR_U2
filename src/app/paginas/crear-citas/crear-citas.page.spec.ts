import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearCitasPage } from './crear-citas.page';

describe('CrearCitasPage', () => {
  let component: CrearCitasPage;
  let fixture: ComponentFixture<CrearCitasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

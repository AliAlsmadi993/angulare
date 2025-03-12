import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalseComponent } from './detalse.component';

describe('DetalseComponent', () => {
  let component: DetalseComponent;
  let fixture: ComponentFixture<DetalseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

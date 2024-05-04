import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zx9Component } from './zx9.component';

describe('Zx9Component', () => {
  let component: Zx9Component;
  let fixture: ComponentFixture<Zx9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zx9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Zx9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

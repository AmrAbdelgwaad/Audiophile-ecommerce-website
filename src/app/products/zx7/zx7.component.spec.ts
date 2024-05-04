import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zx7Component } from './zx7.component';

describe('Zx7Component', () => {
  let component: Zx7Component;
  let fixture: ComponentFixture<Zx7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zx7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Zx7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

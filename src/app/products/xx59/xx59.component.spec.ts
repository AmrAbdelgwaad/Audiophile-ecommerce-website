import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Xx59Component } from './xx59.component';

describe('Xx59Component', () => {
  let component: Xx59Component;
  let fixture: ComponentFixture<Xx59Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Xx59Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Xx59Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

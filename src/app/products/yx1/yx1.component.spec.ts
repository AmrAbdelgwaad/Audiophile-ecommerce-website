import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Yx1Component } from './yx1.component';

describe('Yx1Component', () => {
  let component: Yx1Component;
  let fixture: ComponentFixture<Yx1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Yx1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Yx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

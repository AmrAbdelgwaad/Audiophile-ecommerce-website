import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Xx99iiComponent } from './xx99ii.component';

describe('Xx99iiComponent', () => {
  let component: Xx99iiComponent;
  let fixture: ComponentFixture<Xx99iiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Xx99iiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Xx99iiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

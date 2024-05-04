import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Xx99iComponent } from './xx99i.component';

describe('Xx99iComponent', () => {
  let component: Xx99iComponent;
  let fixture: ComponentFixture<Xx99iComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Xx99iComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Xx99iComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

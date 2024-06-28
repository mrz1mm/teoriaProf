import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiProjectionComponent } from './multi-projection.component';

describe('MultiProjectionComponent', () => {
  let component: MultiProjectionComponent;
  let fixture: ComponentFixture<MultiProjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiProjectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

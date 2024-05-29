import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolazioneComponent } from './interpolazione.component';

describe('InterpolazioneComponent', () => {
  let component: InterpolazioneComponent;
  let fixture: ComponentFixture<InterpolazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterpolazioneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterpolazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

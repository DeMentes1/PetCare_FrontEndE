import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinaryContentComponent } from './veterinary-content.component';

describe('VeterinaryContentComponent', () => {
  let component: VeterinaryContentComponent;
  let fixture: ComponentFixture<VeterinaryContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VeterinaryContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeterinaryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

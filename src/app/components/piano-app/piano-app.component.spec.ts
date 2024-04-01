import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianoAppComponent } from './piano-app.component';

describe('PianoAppComponent', () => {
  let component: PianoAppComponent;
  let fixture: ComponentFixture<PianoAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PianoAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PianoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

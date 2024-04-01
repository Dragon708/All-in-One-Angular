import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertAppComponent } from './convert-app.component';

describe('ConvertAppComponent', () => {
  let component: ConvertAppComponent;
  let fixture: ComponentFixture<ConvertAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

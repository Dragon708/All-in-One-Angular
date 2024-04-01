import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasApiComponent } from './noticias-api.component';

describe('NoticiasApiComponent', () => {
  let component: NoticiasApiComponent;
  let fixture: ComponentFixture<NoticiasApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

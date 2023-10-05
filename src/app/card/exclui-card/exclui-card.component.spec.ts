import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluiCardComponent } from './exclui-card.component';

describe('ExcluiCardComponent', () => {
  let component: ExcluiCardComponent;
  let fixture: ComponentFixture<ExcluiCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluiCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

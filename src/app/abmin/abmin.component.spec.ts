import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbminComponent } from './abmin.component';

describe('AbminComponent', () => {
  let component: AbminComponent;
  let fixture: ComponentFixture<AbminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

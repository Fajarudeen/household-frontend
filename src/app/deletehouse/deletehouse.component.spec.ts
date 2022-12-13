import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletehouseComponent } from './deletehouse.component';

describe('DeletehouseComponent', () => {
  let component: DeletehouseComponent;
  let fixture: ComponentFixture<DeletehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletehouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPropertyModalComponent } from './add-property-modal.component';

describe('AddPropertyModalComponent', () => {
  let component: AddPropertyModalComponent;
  let fixture: ComponentFixture<AddPropertyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPropertyModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPropertyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

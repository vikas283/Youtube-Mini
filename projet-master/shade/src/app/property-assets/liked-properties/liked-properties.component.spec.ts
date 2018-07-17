import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedPropertiesComponent } from './liked-properties.component';

describe('LikedPropertiesComponent', () => {
  let component: LikedPropertiesComponent;
  let fixture: ComponentFixture<LikedPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikedPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

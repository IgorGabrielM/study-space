import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPostComponent } from './dialog-post.component';

describe('DialogPostComponent', () => {
  let component: DialogPostComponent;
  let fixture: ComponentFixture<DialogPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogPostComponent]
    });
    fixture = TestBed.createComponent(DialogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

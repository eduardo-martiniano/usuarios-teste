import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUserConfirmModalComponent } from './delete-user-confirm-modal.component';

describe('DeleteUserConfirmModalComponent', () => {
  let component: DeleteUserConfirmModalComponent;
  let fixture: ComponentFixture<DeleteUserConfirmModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUserConfirmModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteUserConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
